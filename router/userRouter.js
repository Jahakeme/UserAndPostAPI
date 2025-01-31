const {Router} = require('express');
const userRouter = Router();
const {signup, login, getSingleUser, deleteUser} = require('../controller/userController');
const authMiddleware = require('../middlewares/authMiddlware');

// Routes
// POST /api/user/signup
userRouter.post('/user/signup', signup);

// POST /api/user/login
userRouter.post('/user/login', login);

// GET /api/user/:id
userRouter.get('/user/:id', authMiddleware, getSingleUser);

// DELETE /api/user/:id
userRouter.delete('/user/:id', authMiddleware, deleteUser);

module.exports = userRouter;