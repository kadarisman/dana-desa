const router = require('express').Router();
const middleware = require ('../middleware/Auth');
const { validationDetailBelanja } = require('../validations/DetailBelanja.validation');
const {
    getAllDetailBelanja,
    getDetailBelanjaById,
    createDetailBelanja,
    updateDetailBelanja,
    deleteDetailBelanja
} = require('../controllers/DetailBelanjaController');

router.get('/', getAllDetailBelanja);
router.get('/:id', getDetailBelanjaById);
router.post('/', middleware.isAuth, validationDetailBelanja, createDetailBelanja);
router.put('/:id?', middleware.isAuth, updateDetailBelanja);
router.delete('/:id?', middleware.isAuth, deleteDetailBelanja);

module.exports = router;