import express from 'express';
import bodyParser from 'body-parser';
import { createNewUser } from './user.controller';

const router = express.Router();

router.use(bodyParser.json());

// CREATE NEW USER
router.post('/', createNewUser);

export default router; 