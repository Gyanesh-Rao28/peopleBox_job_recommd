# Job Recommendation Service

This project implements a job recommendation service using Node.js and MongoDB. It provides an API endpoint that accepts user profile data and returns a list of recommended job postings based on the user's skills, experience, and preferences.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/Gyanesh-Rao28/peopleBox_job_recommd.git
   cd peopleBox_job_recommd
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:
   ```
   PORT=3000
   CORS_ORIGIN=*
   MONGO_URL=mongodb+srv://<UserName>:<Password>@cluster0.ylosiqb.mongodb.net
   ```

4. Start the server:
   ```
   npm start
   ```

The server will start running on `http://localhost:3000`.

## API Usage

### Endpoint: POST /api/recommend-jobs

This endpoint accepts user profile data and returns a list of recommended job postings.

#### Sample Input:

```json
{
  "name": "John Doe",
  "skills": ["JavaScript", "Node.js", "React"],
  "experience_level": "Intermediate",
  "preferences": {
    "desired_roles": ["Software Engineer", "Full Stack Developer"],
    "locations": ["San Francisco", "Remote"],
    "job_type": "Full-Time"
  }
}
```

#### Sample Output:

```json
[
  {
    "job_title": "Software Engineer",
    "company": "Tech Solutions Inc.",
    "location": "San Francisco",
    "job_type": "Full-Time",
    "required_skills": ["JavaScript", "React", "Node.js"],
    "experience_level": "Intermediate"
  },
  {
    "job_title": "Full Stack Developer",
    "company": "Startup Hub",
    "location": "Austin",
    "job_type": "Full-Time",
    "required_skills": ["JavaScript", "Node.js", "Angular", "MongoDB"],
    "experience_level": "Intermediate"
  }
]
```

## Testing

To run the tests:

```
npm test
```

## Documentation

For more details on the recommendation algorithm and implementation, please refer to the `documentation.docx` file in this repository.