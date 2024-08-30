"use server";

import { auth } from "../auth";
import DBConnection from "../utils/config/db";
import BookingModel from "../utils/models/Booking";
import UserModel from "../utils/models/User";

export async function bookingAction(bookingDetails) {
    await DBConnection();

    const session = await auth();

    console.log("user email:", session.email);

    try {
        const user = await UserModel.findOne({ email: session.email });

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const userId = user._id.toString();

        console.log("booking check:", bookingDetails)

        const userBookingDetails = await BookingModel.create({
            startDate: bookingDetails.selecetedDates.startDate,
            endDate: bookingDetails.selecetedDates.endDate,
            productName: bookingDetails.record.title,
            price: bookingDetails.record.price,
            offer: bookingDetails.record.offer,
            image: bookingDetails.record.image
        });

        await UserModel.findByIdAndUpdate(
            userId,
            { $push: { bookings: userBookingDetails._id } },
            { new: true }
        );

        return { success: true };
    } catch (error) {
        console.error('Error creating booking:', error);
        return { success: false, message: 'Failed to create booking' };
    }
}