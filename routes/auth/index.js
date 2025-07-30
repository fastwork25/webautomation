import { Router } from 'express';
import express from 'express';

const router = Router();
import * as apiController from './../../controllers/files/apiController.js';


router.post('/create-token', async (req, res, next) => {
  return await apiController.createToken(req, res);
});


export default router;