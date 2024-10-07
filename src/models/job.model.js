import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    jobId: Number,
    jobTitle: String,
    company: String,
    requiredSkills: [String],
    location: String,
    jobType: String,
    experienceLevel: String
});

const Job = mongoose.model('Job', jobSchema);

export default Job