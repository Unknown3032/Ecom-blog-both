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
    const { category, subCategory, theme, subTheme, desc, title, images, price, sizes, colors, bulletPoints, keyHighlights, quantity, sales } = await req.json()


    let product = await new Product({
        product_info: { category, subCategory, theme, subTheme, desc, title, images, price, sizes, colors, bulletPoints, keyHighlights, quantity, sales }
    })

    await product.save().then((u) => {
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