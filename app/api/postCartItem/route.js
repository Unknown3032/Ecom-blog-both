export const dynamic = 'force-dynamic' // defaults to force-static
import { NextResponse } from 'next/server'

import connectDB from '@/middleware/ConnectDb';
import CartItem from '@/models/CartItem';
import Product from '@/models/Product';
import { headers } from 'next/headers';

import jwt from 'jsonwebtoken'
const bcrypt = require('bcrypt');



export async function POST(req) {
    // dbconnection 
    connectDB();

    // variables
    let data;
    let status;
    let jwtToken;
    let user_id;


    const authorizationToken = headers().get('authorization');
    jwtToken = authorizationToken && authorizationToken.split(" ")[1];



    if (jwtToken == null) {
        data = { message: "No access Token" }
        status = 403;
        return NextResponse.json({ data }, { status })
    }

    jwt.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            data = { message: "Invalid Token" }
            status = 403;
            return NextResponse.json({ data }, { status })
        }

        user_id = user?.id
    })


    if (user_id) {
        // request.body 
        let { item } = await req.json()

        await CartItem.findOne({ "item_info.user_id": user_id }).then(async (user) => {
            // find the user has any product in cart or not  
            if (user) {
                let _id = user?._id
                let currentProductId;
                let identifierQty;
                let tempItem = user?.item_info?.item;

                // checking product is already in cart or not 
                await user?.item_info.item?.map((productId, i) => {
                    if (productId?.product_id == item?.product_id && productId?.color == item?.color && productId?.size == item?.size) {
                        currentProductId = i;
                        identifierQty = 1;
                        tempItem[i].qty = (tempItem[i]?.qty + item?.qty);
                        return;
                    }
                    else {
                        identifierQty = 0;
                    }
                })

                // if same product already have in cart the upadate qunatity 
                if (item?.color == tempItem[currentProductId]?.color && item?.size == tempItem[currentProductId]?.size) {
                    await CartItem.findOneAndUpdate({ _id }, { "item_info.item": tempItem }).then(() => {
                        data = { "success": true }
                        status = 200
                        console.log("updated successfully");
                        return NextResponse.json({ data }, { status })
                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.log("error", e.message);
                        return NextResponse.json({ "error": e.message }, { status: 500 })
                    });
                } else {
                    // if same product not have in cart then add new product in cart
                    await Product.findOne({ _id: item.product_id }).then((product) => {
                        let img = product?.product_info?.images[0];;
                        let price = product?.product_info?.price;
                        let title = product?.product_info?.title;

                        if (Object.keys(product?.product_info?.colors[0])[0] == item?.color) {
                            img = product?.product_info?.colors[0]?.[item?.color]
                        }
                        item = { ...item, img, price, title }
                    })

                    await CartItem.findOneAndUpdate({ _id }, {
                        $push: { "item_info.item": item },
                    }).then(() => {
                        data = { "success": true }
                        status = 200
                        console.log("updated successfully");
                        return NextResponse.json({ data }, { status })
                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.log("error", e.message);
                        return NextResponse.json({ "error": e.message }, { status: 500 })
                    });
                }
            }
            // if user not have any product in cart
            else {
                await Product.findOne({ _id: item.product_id }).then((product) => {
                    let img = product?.product_info?.images[0];;
                    let price = product?.product_info?.price;
                    let title = product?.product_info?.title;

                    if (product?.product_info?.colors?.length && Object.keys(product?.product_info?.colors[0])[0] == item?.color) {
                        img = product?.product_info?.colors[0]?.[item?.color]
                    }
                    item = { ...item, img, price, title }
                })

                let cartItem = await new CartItem({
                    item_info: { user_id, item }
                })

                await cartItem.save().then((u) => {
                    data = { 'success': true }
                    status = 200
                    return new Response("hello", {
                        status: 200,
                    })
                }).catch((e) => {
                    data = { "error": e.message }
                    status = 500
                    console.log("error", e.message);
                    return NextResponse.json({ "error": e.message }, { status: 500 })

                });

                return NextResponse.json({ data }, { status })
            }

        })
    }
    return NextResponse.json({ data }, { status })
}