

"use server"

import DBConnection from "../utils/config/db"
import UserModel from "../utils/models/User"

export async function registerAction(registerDetails){
        await DBConnection()

        console.log("regAction details: ", registerDetails)

        try {
            await UserModel.create({
                username: registerDetails.username,
                email: registerDetails.email,
                password: registerDetails.password
            })
            return {success:true}
        } catch (error) {
            if (error.code === 11000 && error.keyPattern.email) {
                return { success: false, status: 400, message: "Email already taken" };
            }
            console.log(error);
            return { success: false, status: 500, message: "An error occurred" };
        }

}

