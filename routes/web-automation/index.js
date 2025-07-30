import { Router } from 'express';
import express from 'express';

const router = Router();
import * as controller from './../../controllers/webAutomation/Controller.js';


router.get('/puppeteer', async (req, res, next) => {
  return await controller.getHello(req, res);
});


export default router;