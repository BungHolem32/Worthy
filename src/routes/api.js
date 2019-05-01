import express from 'express';
import ApiController from '../controllers/apiController';
import fieldsValidation from '../config/validation';

const router = express.Router();

router.post('/calculatePrice', fieldsValidation , ApiController.calculate);

export default router;
