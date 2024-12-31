export const dynamic = 'force-dynamic' // defaults to force-static
import { NextResponse } from 'next/server'

import connectDB from '@/middleware/ConnectDb';
import Categories from '@/models/Categories';





export async function POST(req) {
    // dbconnection 
    connectDB();

    // variables
    let data;
    let status;


    // request.body 
    const { category, url, desc, title } = await req.json()


    let cat = await new Categories({
        img_info: { category, url, desc, title }
    })

    await cat.save().then((u) => {
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