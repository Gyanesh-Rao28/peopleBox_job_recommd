import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    skills: [String],
    experienceLevel: String,
    preferences: {
        desiredRoles: [String],
        locations: [String],
        jobType: String
    }
});

const User = mongoose.model('User', userSchema);
export default User;