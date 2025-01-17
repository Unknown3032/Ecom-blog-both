export const dynamic = 'force-dynamic' // defaults to force-static
import { NextResponse } from 'next/server'

import connectDB from '@/middleware/ConnectDb';
import CartItem from '@/models/CartItem';
import Product from '@/models/Product';
import { headers } from 'next/headers';

import jwt from 'jsonwebtoken'


export async function POST(req) {
    // dbconnection 
    connectDB();

    // variables
    let data;
    let status;
    let dataTosend = [];
    let jwtToken;
    let user_id;


    const authorizationToken = headers().get('authorization');
    jwtToken = authorizationToken && authorizationToken.split(" ")[1];

    if (jwtToken == null) {
        data = { message: "No access Token" }
        status = 403;
        return NextResponse.json({ data }, { status })
    }

    jwt?.verify(jwtToken, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            data = { message: "Invalid Token" }
            status = 403;

            return NextResponse.json({ data }, { status })
        }

        user_id = user?.id
    })


    if (user_id) {
        await CartItem.findOne({ "item_info.user_id": user_id }).then(async (user) => {
            data = []
            if (user) {
                await user?.item_info?.item?.map(async (item, i) => {
                    dataTosend?.push(item)
                })
                data = dataTosend;
                status = 200
                return NextResponse.json({ data }, { status })
            }

            else {
                data = { "error": "no product in cart" }
                status = 200;
                return NextResponse.json({ data }, { status })
            }


        })
    }
    // console.log(dataTosend);
    return NextResponse.json({ data }, { status })


}