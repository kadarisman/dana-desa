const user = require('../models/UserModel');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const {localISOTime} = require('../helpers/globalHelper');

const getAllUser = async (req, res) =>{
    try {
        const users = await user.getAllUser();
        res.status(201).json({data : users});
    } catch (error) {
        res.status(401).json({message : error});
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userById = await user.getUserById(id);
        if(!userById){
            res.status(201).json({message: `User with id ${id} not avilable`});
            return false;
        }
        res.status(201).json({data : userById});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createUser = (req, res) =>{
    try {
        const userData ={
            nama        : req.body.nama,
            username    : req.body.username,
            password    : bcrypt.hashSync(req.body.password, salt),
            created_at  : localISOTime
        };
        user.insertUser(userData)
        .then(row =>{
            res.status(201).json({message: `User saved`})
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({message: error});
    }
}


const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const userById = await user.getUserById(id);
        if(!userById){
            res.status(201).json({message : `User with id ${id} not available`});
            return false;
        }
        const userData ={
            nama        : req.body.nama,
            username    : req.body.username,
            updated_at   : localISOTime
        };
        user.editUser(userData, id)
        .then(row =>{
          res.status(201).json({message: `User with id ${id} has been updated`});
        })
        .catch(err =>{
            res.status(400).json({message: err});
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({message: error});
    }
}

const deleteUser = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const userById = await user.getUserById(id);
        if(!userById){
            res.status(201).json({message: `User with id ${id} not available`});
            return false;
        }
        user.deleteUser(id)
        .then(row =>{
            res.status(201).json({message : `User with id ${id} has been deleted`});
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        res.status(500).json({message : error});
    }
}

module.exports= {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}