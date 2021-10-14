const express = require('express');
const {
    getAllUsers,
    getAUser,
    updateAUser,
    deleteAUser
} = require('../controllers/user');

const router = express.Router();

router
    .route('/users')
    .get(getAllUsers)
    .get(getAUser);

router
    .route('/users/:id')
    .post(updateAUser)
    .post(deleteAUser);

module.exports = router;