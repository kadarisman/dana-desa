const router = require('express').Router();
const { validationPendapatan } = require('../validations/Pendapatan.validation');
const middleware = require ('../middleware/Auth');
const {
    getAllPendapatan,
    getPendapatanById,
    createPendapatan,
    updatePendapatan,
    deletePendapatan
} = require('../controllers/PendapatanController');

router.get('/', getAllPendapatan);
router.get('/:id', getPendapatanById);
router.post('/', middleware.isAuth, validationPendapatan, createPendapatan);
router.put('/:id?', middleware.isAuth, updatePendapatan);
router.delete('/:id?', middleware.isAuth, deletePendapatan);

module.exports = router;