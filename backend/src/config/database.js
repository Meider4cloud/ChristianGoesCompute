import mongoose from "mongoose";

const connectionDB = async () => {
try {
    const connectionInstance= await mongoose.connect(
        `${process.env.MONGO_URI}`
    )
    console.log(`\n MONGODB has connected successfully
        ${connectionInstance.connect.host}`);
    
} catch (error) {
    console.log('MongoDB has failed to connect',error)
    process.exit(1);
}

}
export default connectionDB;