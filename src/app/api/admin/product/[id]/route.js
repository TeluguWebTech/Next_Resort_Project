import DBConnection from "@/app/utils/config/db";
import ProductModel from "@/app/utils/models/Product";

import { NextResponse } from "next/server";



export async function GET(request, {params}){
    await DBConnection()

    const {id} = params

    console.log("dynamic Id:", id)

    try {
            if(!id){
                return NextResponse.json({success:false, message: 'no product found'}, {status:404})
            }

            const product = await ProductModel.findById(id)

            return NextResponse.json({success:true, data:product})

    } catch (error) {
        console.log(error)
        return NextResponse.json({success:false, message:'ID Is missing'})
    }

}