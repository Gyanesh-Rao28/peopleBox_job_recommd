import Job from '../models/job.model.js'
import User from '../models/user.model.js'



const getJobs = async(req, res)=>{
   
    try {
        const result = await Job.find()

        res.json(result)
    } catch (error) {
        
    }

}


const jobRecommd = async (req, res) => {
    try {
        const data = req.body;
        if (!data || !data.name || !data.skills) {
            return res.status(400).json({ error: 'Invalid input: name and skills are required.' });
        }

        const user_skills = new Set(data.skills);
        const desired_roles = new Set(data.preferences?.desired_roles || []);
        const preferred_locations = new Set(data.preferences?.locations || []);
        const job_type = data.preferences?.job_type || null;
        const experience_level = data.experience_level || null;

        // Fetch job postings from the database
        const job_postings = await Job.find();
        const recommendations = [];

        for (const job of job_postings) {
            let score = 0;

            // Check for desired roles
            if (desired_roles.has(job.job_title)) {
                score += 2;
            }

            // Check for job type
            if (job.job_type === job_type) {
                score += 1;
            }

            // Check for preferred locations
            if (preferred_locations.has(job.location)) {
                score += 1;
            }

            // Check for experience level
            if (job.experience_level === experience_level) {
                score += 1;
            }

            // Check for matching skills
            const required_skills = new Set(job.required_skills);
            const matching_skills = [...user_skills].filter(skill => required_skills.has(skill));
            score += matching_skills.length;

            if (score > 0) {
                recommendations.push({
                    ...job.toObject(),  // Include all fields from the job document
                    score: score
                });
            }
        }

        recommendations.sort((a, b) => b.score - a.score);

        if (recommendations.length === 0) {
            return res.status(200).json({
                message: 'No suitable job postings found. Consider broadening your search criteria.',
            });
        }

        console.log(recommendations);
        res.status(200).json(recommendations);


    } catch (error) {
        console.error('Error in recommendJobs:', error);
        res.status(500).json({ error: 'An unexpected error occurred: ' + error.message });
    }
};


export { getJobs, jobRecommd }