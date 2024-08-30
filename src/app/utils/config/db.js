const { default: mongoose } = require("mongoose");


const DBConnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected")
    } catch (error) {
        console.log(error)
    }

}

export default DBConnection