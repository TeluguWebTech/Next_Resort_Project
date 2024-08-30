

"use server"

import { signIn } from "../auth"
import DBConnection from "../utils/config/db"

export async function loginAction(loginDetails){
    await DBConnection()

    console.log("sample login", loginDetails)

    try {
        const response = await signIn('credentials',{
            email:loginDetails.email,
            password: loginDetails.password,
            redirect:false
        })
        return {success:true}
    } catch (error) {
        throw new Error("Invalid credentials")
    }

}