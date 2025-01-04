export const dynamic = 'force-dynamic' // defaults to force-static
import { NextResponse } from 'next/server'

import connectDB from '@/middleware/ConnectDb';
import Product from '@/models/Product';





export async function POST(req) {
    // dbconnection 
    connectDB();

    // variables
    let data;
    let status;


    // request.body
    const { key } = await req.json()

    if (key) {
        if (key == 'new') {
            await Product.find().sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'best') {
            await Product.find().sort({ "product_info.sales": -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-mug') {
            await Product.find({ "product_info.subCategory": "mug" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-poster') {
            await Product.find({ "product_info.subCategory": "poster" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-clothes') {
            await Product.find({ "product_info.category": "clothes" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-accessories') {
            await Product.find({ "product_info.category": "accessories" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'best-accessories') {
            await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'best-clothes') {
            await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }
    }

    else {
        data = { "error": "some thing went wrong!" }
        status = 500
        return NextResponse.json({ data }, { status })
    }





    return NextResponse.json({ data }, { status })
}