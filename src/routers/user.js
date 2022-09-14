const router = require('express').Router();
const middleware = require ('../middleware/Auth');
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/UserController');

router.get('/', getAllUser);
router.get('/:id', getUserById);
router.post('/', middleware.isAuth, createUser);
router.put('/:id?', middleware.isAuth, updateUser);
router.delete('/:id?', middleware.isAuth, deleteUser);

module.exports = router;