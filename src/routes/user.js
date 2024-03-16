import express from 'express';
import User from '../models/userModel.js';

const userRouter = express.Router();

userRouter.get('/:id?', async (req, res) => {
    const requestedId = req.params.id;
    let dbResult;

    if (requestedId)
        dbResult = await User.getById(requestedId);
    else
        dbResult = await User.getAll();

    res.json(dbResult[0]);
});

export default userRouter;
