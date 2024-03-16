import database from '../database.js';

const User = {
    getById: async (id) => {
        const dbResult = await database.query('select * from user where id = ?', [id]);
        return dbResult;
    },

    getAll: async () => {
        const dbResult = await database.query('select * from user');
        return dbResult;
    }
};

export default User;
