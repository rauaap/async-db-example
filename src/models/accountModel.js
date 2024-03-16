import database from '../database.js';

const Account = {
    getById: async (id) => {
        const dbResult = await database.query('select * from account where id = ?', [id]);
        return dbResult;
    },

    getAll: async () => {
        const dbResult = await database.query('select * from account');
        return dbResult;
    }
};

export default Account;
