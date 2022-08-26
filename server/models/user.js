import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Session = mongoose.Schema({
    refreshToken: {
        type: String,
        default: "",
    },
});
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    DOB: {
        type: Date,
    },
    qualification: [],
    district: {
        type: String,
    },
    city: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },

    Notifications: [],
    bookmarks: [],
    username: {
        type: String,
    },
    experience: {
        type: String
    },
    password: {
        type: String
    }
});
const User = mongoose.model("Users", userSchema);
export default User;
