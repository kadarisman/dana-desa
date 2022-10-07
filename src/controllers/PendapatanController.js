const pendapatan = require('../models/PendpatanModel');
const {localISOTime} = require('../helpers/globalHelper');

const getAllPendapatan = async (req, res) =>{
    try {
        const pendapatanData = await pendapatan.getAllPendapatan();
        res.status(201).json({data : pendapatanData});
    } catch (error) {
        // console.log(error);
        res.status(401).json({message : error});
    }
}

const getPendapatanById = async (req, res) => {
    try {
        const id = req.params.id;
        const pendapatanById = await pendapatan.getPendapatanById(id);
        if(!pendapatanById){
            res.status(201).json({message: `Pendapatan with id ${id} not avilable`});
            return false;
        }
        res.status(201).json({data : pendapatanById});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createPendapatan = (req, res) =>{
    try {
        const auth = req.auth;
        const pendapatanData ={
            jumlah          : req.body.jumlah,
            sumber          : req.body.sumber,
            user_created    : req.auth.id,
            created_at      : localISOTime
        };
        pendapatan.insertPendapatan(pendapatanData)
        .then(row =>{
            res.status(201).json({message: `Pendapatan saved`})
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        res.status(500).json({message: error});
    }
}


const updatePendapatan = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const pendapatanById = await pendapatan.getPendapatanById(id);
        if(!pendapatanById){
            res.status(201).json({message : `Pendapatan with id ${id} not available`});
            return false;
        }
        const pendapatanData ={
            jumlah      : req.body.jumlah,
            sumber      : req.body.sumber,
            updated_at  : localISOTime
        };
        pendapatan.editPendapatan(pendapatanData, id)
        .then(row =>{
          res.status(201).json({message: `Pendapatan with id ${id} has been updated`});
        })
        .catch(err =>{
            res.status(400).json({message: err});
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({message: error});
    }
}

const deletePendapatan = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const pendapatanById = await pendapatan.getPendapatanById(id);
        if(!pendapatanById){
            res.status(201).json({message: `Pendapatan with id ${id} not available`});
            return false;
        }
        pendapatan.deletePendapatan(id)
        .then(row =>{
            res.status(201).json({message : `Pendapatan with id ${id} has been deleted`});
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        res.status(500).json({message : error});
    }
}

module.exports= {
    getAllPendapatan,
    getPendapatanById,
    createPendapatan,
    updatePendapatan,
    deletePendapatan
}