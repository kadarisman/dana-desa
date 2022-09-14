const router = require("express").Router();

const login         = require('./login');
const users         = require('./user');
const pendapatan    = require('./pendapatan');
const bidangBelanja       = require('./bidangBelanja');
const detailBelanja      = require('./detailBelanja');
// const categorys     = require('./category');
// const postCategorys  = require('./postCategory');
// 
router.use('/login', login);
router.use('/users', users);
router.use('/pendapatan', pendapatan);
router.use('/bidang-belanja', bidangBelanja);
router.use('/detail-belanja', detailBelanja);
// router.use('/categorys', categorys);
// router.use('/post-categorys', postCategorys);

module.exports = router;