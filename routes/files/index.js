import { Router } from 'express';
import express from 'express';

const router = Router();
import * as apiController from './../../controllers/files/apiController.js';


router.post('/:folderId/file', async (req, res, next) => {
  return await apiController.createFile(req, res);
});

router.get('/file/:fileId/openedit', async (req, res, next) => {
  return await apiController.openEdit(req, res);
});


router.post('/room', async (req, res, next) => {
  return await apiController.createRoom(req, res);
});

router.get('/room', async (req, res, next) => {
  return await apiController.readRoom(req, res);
});

export default router;