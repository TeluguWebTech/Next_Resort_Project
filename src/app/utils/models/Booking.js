const { default: mongoose } = require("mongoose");


const bookingSchema = new mongoose.Schema({
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    }, 
    price:{
        type:String,
        required:true
    },
    offer:{
        type:String,
     
    },
    image:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

})

const BookingModel = mongoose.models.booking || mongoose.model('booking', bookingSchema)

export default BookingModel