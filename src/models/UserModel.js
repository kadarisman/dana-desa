const knex = require('./../config/db');
 
const usernameCheck = (username) => {
    return knex.select('email').from('user').where({username: username}).first();
}

const loginCheck = (username, password) => {
    return knex.select('*').from('user').where({username : username, password : password});
}

const getAllUser = () => {
    return knex.select('u.id', 'u.nama', 'u.username', 'u.created_at', 'u.updated_at').from('user as u');
}

const getuserByUsername = (username)=>{
    return knex('user').where({username: username}).first();
}

const getUserById = (id) => {    
    return knex.select('u.id', 'u.nama', 'u.username', 'u.created_at', 'u.updated_at').from('user as u').where({id:id}).first();
}
 
const insertUser = (data) =>{
    return knex('user').insert(data);
}

const editUser = (data, id) =>{
    return knex('user').where({id : id}).update(data);
}

const deleteUser = (id) =>{
    return knex('user').where({id : id}).delete();
} 

module.exports = {
    usernameCheck,
    loginCheck,
    getAllUser,
    getuserByUsername,
    getUserById,
    insertUser,
    editUser,
    deleteUser
}