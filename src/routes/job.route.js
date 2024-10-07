import { Router } from "express";
import { getJobs, jobRecommd } from '../controllers/job.controller.js'

const router = Router()

router.route('/').get(getJobs)
router.route('/jobRecommd').get(jobRecommd)


export default router