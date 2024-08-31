

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
        if(!response || response.error){
            console.log("login failed", response?.error)
            throw new Error("login falied, Please Register")
        }
        return {success:true}
    } catch (error) {
        if (error.code === "An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.") {
            return { success: false, status: 400, message: "Please Register" };
        }
        console.log(error);
        return { success: false, status: 500, message: "An error occurred" };
    }

}