import mongoose from "mongoose";
import User from "../models/User.cjs";
import bcrypt from "bcrypt";

const mongoDB = import.meta.env.MONGO_URI;

mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const StoreUser = async (email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: hashedPassword
    });
    const result= await user.save();
    return result;
};
export default StoreUser