import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json())


import analyticRoute from './routes/job.route.js'




app.use('/api/v1/test', (req, res) => {
    res.send({
        testingAPI: "working"
    })
})

app.use('/api/v1/job', analyticRoute) 



export { app } 