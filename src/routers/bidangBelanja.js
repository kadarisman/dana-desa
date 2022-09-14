const router = require('express').Router();
const middleware = require ('../middleware/Auth');
const {
    getAllBidangBelanja,
    getBidangBelanjaById,
    createBidangBelanja,
    updateBidangBelanja,
    deleteBidangBelanja
} = require('../controllers/BidangBelanjaController');

router.get('/', getAllBidangBelanja);
router.get('/:id', getBidangBelanjaById);
router.post('/', middleware.isAuth, createBidangBelanja);
router.put('/:id?', middleware.isAuth,  updateBidangBelanja);
router.delete('/:id?', middleware.isAuth, deleteBidangBelanja);

module.exports = router;