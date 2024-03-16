import express from 'express';
import Account from '../models/accountModel.js';

const accountRouter = express.Router();

accountRouter.get('/:id?', async (req, res) => {
    const requestedId = req.params.id;
    let dbResult;

    if (requestedId)
        dbResult = await Account.getById(requestedId);
    else
        dbResult = await Account.getAll();

    res.json(dbResult[0]);
});

export default accountRouter;
