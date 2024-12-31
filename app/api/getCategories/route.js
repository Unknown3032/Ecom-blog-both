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
    const { category } = await req.json()


    await Categories.find({ "img_info.category": category }).then(async (banner) => {
        if (banner) {
            data = { "imgs": banner }
            status = 200
            return NextResponse.json({ data }, { status })
        }
        else {
            data = { "error": "category not found!" }
            status = 404
            return NextResponse.json({ data }, { status })
        }

    })

    return NextResponse.json({ data }, { status })
}