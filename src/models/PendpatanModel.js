const knex = require('./../config/db');

const getAllPendapatan = () => {
    return knex.select('p.id', 'p.jumlah', 'p.sumber', 'u.nama as user_created', 'p.created_at', 'p.updated_at')
    .from('pendapatan as p')
    .leftJoin('user as u', 'p.user_created', 'u.id');
}

const getPendapatanById = (id) => {    
    return knex.select('p.id', 'p.jumlah', 'p.sumber', 'u.nama as user_created', 'p.created_at', 'p.updated_at')
    .from('pendapatan as p')
    .leftJoin('user as u', 'p.user_created', 'u.id')
    .where('p.id', '=', id).first();
}
 
const insertPendapatan = (data) =>{
    return knex('pendapatan').insert(data);
}

const editPendapatan = (data, id) =>{
    return knex('pendapatan').where({id : id}).update(data);
}

const deletePendapatan = (id) =>{
    return knex('pendapatan').where({id : id}).delete();
} 

module.exports = {
    getAllPendapatan,
    getPendapatanById,
    insertPendapatan,
    editPendapatan,
    deletePendapatan
}