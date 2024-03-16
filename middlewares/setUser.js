const asyncHandler = require('express-async-handler');
const { users } = require('../data')

const setUser = asyncHandler(async (req, res, next) => {
    const userId = req.body.userId;
    if (userId) {
        req.user = users.find(user => user.id === userId)
    }
    next();
});

module.exports = setUser;