const knex = require('../config/db');

const getAllDetailBelanja = () => {
    return knex.select('db.id', 'db.jumlah', 'db.tanggal',  'u.nama as user_created', 'db.created_at', 
    'db.updated_at', 'b.bidang')
    .from('detail_belanja as db')
    .leftJoin('user as u', 'db.user_created', 'u.id')
    .leftJoin('bidang_belanja as b', 'b.id', 'db.id_bidang')
    .orderBy('b.bidang', 'desc');
}

const getDetailBelanjaById = (id) => {    
    return knex.select('db.id', 'db.jumlah', 'db.tanggal',  'u.nama as user_created', 'db.created_at', 
    'db.updated_at', 'b.bidang', 'db.id_bidang')
    .from('detail_belanja as db')
    .leftJoin('user as u', 'db.user_created', 'u.id')
    .leftJoin('bidang_belanja as b', 'b.id', 'db.id_bidang')
    .where('db.id', '=', id).first();
}
 
const insertDetailBelanja = (data) =>{
    return knex('detail_belanja').insert(data);
}

const editDetailBelanja = (data, id) =>{
    return knex('detail_belanja').where({id : id}).update(data);
}

const deleteDetailBelanja = (id) =>{
    return knex('detail_belanja').where({id : id}).delete();
} 

module.exports = {
    getAllDetailBelanja,
    getDetailBelanjaById,
    insertDetailBelanja,
    editDetailBelanja,
    deleteDetailBelanja
}