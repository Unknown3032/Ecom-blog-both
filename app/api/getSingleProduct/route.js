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
    const { _id } = await req.json()
    console.log(_id);

    if (_id) {
        await Product.findOne({ _id }).then(async (product) => {
            // console.log(product);

            if (product) {
                // console.log(product);
                data = { product }
                status = 200
                return NextResponse.json({ data }, { status })
            }
            else {
                data = { "error": "some thing went wrong!" }
                status = 500
                return NextResponse.json({ data }, { status })
            }


        }).catch((e) => {
            data = { "error": e.message }
            status = 500
            console.error(e.message); // "oh, no!"
        })
    }

    else {
        data = { "error": "some thing went wrong!" }
        status = 500
        return NextResponse.json({ data }, { status })
    }





    return NextResponse.json({ data }, { status })
}