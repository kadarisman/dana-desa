const detailBelanja = require('../models/DetailBelanjaModel');
const {localISOTime, reversDate} = require('../helpers/globalHelper');

const getAllDetailBelanja = async (req, res) =>{
    try {
        const detailBelanjaData = await detailBelanja.getAllDetailBelanja();
        res.status(201).json({data : detailBelanjaData});
    } catch (error) {
        // console.log(error);
        res.status(401).json({message : error});
    }
}

const getDetailBelanjaById = async (req, res) => {
    try {
        const id = req.params.id;
        const detailBelanjaById = await detailBelanja.getDetailBelanjaById(id);
        if(!detailBelanjaById){
            res.status(201).json({message: `Detail Belanja with id ${id} not avilable`});
            return false;
        }
        res.status(201).json({data : detailBelanjaById});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createDetailBelanja = (req, res) =>{
    try {
        const detailBelanjaData ={
            id_bidang       : req.body.id_bidang,
            jumlah          : req.body.jumlah,
            tanggal         : reversDate(req.body.tanggal),
            user_created    : req.auth.id,
            created_at      : localISOTime
        };
        detailBelanja.insertDetailBelanja(detailBelanjaData)
        .then(row =>{
            res.status(201).json({message: `Detail Belanja saved`})
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({message: error});
    }
}


const updateDetailBelanja = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const detailBelanjaById = await detailBelanja.getDetailBelanjaById(id);
        if(!detailBelanjaById){
            res.status(201).json({message : `Detail Belanja with id ${id} not available`});
            return false;
        }
        const detailBelanjaData ={
            id_bidang   : req.body.id_bidang,
            jumlah      : req.body.jumlah,
            tanggal     : req.body.tanggal,
            updated_at  : localISOTime
        };
        // console.log(detailBelanjaData);
        detailBelanja.editDetailBelanja(detailBelanjaData, id)
        .then(row =>{
          res.status(201).json({message: `Detail Belanja with id ${id} has been updated`});
        })
        .catch(err =>{
            // console.log(err);
            res.status(400).json({message: err});
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
}

const deleteDetailBelanja = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const detailBelanjaById = await detailBelanja.getDetailBelanjaById(id);
        if(!detailBelanjaById){
            res.status(201).json({message: `Detail Belanja with id ${id} not available`});
            return false;
        }
        detailBelanja.deleteDetailBelanja(id)
        .then(row =>{
            res.status(201).json({message : `Detail Belanja with id ${id} has been deleted`});
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        res.status(500).json({message : error});
    }
}

module.exports= {
    getAllDetailBelanja,
    getDetailBelanjaById,
    createDetailBelanja,
    updateDetailBelanja,
    deleteDetailBelanja
}