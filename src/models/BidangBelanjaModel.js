const knex = require('../config/db');

const getAllBidangBelanja = () => {
    return knex.select('b.id', 'b.bidang',  'u.nama as user_created', 'b.created_at', 'b.updated_at')
    .from('bidang_belanja as b')
    .leftJoin('user as u', 'b.user_created', 'u.id');
}

const getBidangBelanjaById = (id) => {    
    return knex.select('b.id', 'b.bidang', 'u.nama as user_created', 'b.created_at', 'b.updated_at')
    .from('bidang_belanja as b')
    .leftJoin('user as u', 'b.user_created', 'u.id')
    .where('b.id', '=', id).first();
}
 
const insertBidangBelanja = (data) =>{
    return knex('bidang_belanja').insert(data);
}

const editBidangBelanja = (data, id) =>{
    return knex('bidang_belanja').where({id : id}).update(data);
}

const deleteBidangBelanja = (id) =>{
    return knex('bidang_belanja').where({id : id}).delete();
} 

module.exports = {
    getAllBidangBelanja,
    getBidangBelanjaById,
    insertBidangBelanja,
    editBidangBelanja,
    deleteBidangBelanja
}