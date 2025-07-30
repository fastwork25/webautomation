import express, { Router } from 'express';
const router = Router();
// ** Routes **
import Files from './files/index.js';
import Auth from './auth/index.js';
import webAutomation from './web-automation/index.js';

router.use('/files', Files);
router.use('/auth', Auth);
router.use('/web-automation', webAutomation);

//** SETUP YOUR PREFIX ROUTE NAME

export default router;