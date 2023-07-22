import express from 'express';

const router = express.Router();

import { login, signUp } from '../../controllers/auth-controller.js';
import { createBook,getBooks } from '../../controllers/book-controller.js';


router.post('/register',signUp);
router.post('/auth',login);
router.post('/bookEntry',createBook);

router.get('/search',getBooks); 

export default router; 

