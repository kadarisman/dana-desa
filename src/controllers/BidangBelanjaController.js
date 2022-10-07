const bidangBelanja = require('../models/BidangBelanjaModel');
const {localISOTime} = require('../helpers/globalHelper');

const getAllBidangBelanja = async (req, res) =>{
    try {
        const bidangBelanjaData = await bidangBelanja.getAllBidangBelanja();
        res.status(201).json({data : bidangBelanjaData});
    } catch (error) {
        console.log(error);
        res.status(401).json({message : error});
    }
}

const getBidangBelanjaById = async (req, res) => {
    try {
        const id = req.params.id;
        const bidangBelanjaById = await bidangBelanja.getBidangBelanjaById(id);
        if(!bidangBelanjaById){
            res.status(201).json({message: `Bidang Belanja with id ${id} not avilable`});
            return false;
        }
        res.status(201).json({data : bidangBelanjaById});
    } catch (error) {
        res.status(500).json({message: error});
    }
}

const createBidangBelanja = (req, res) =>{
    try {
        const bidangBelanjaData ={
            bidang          : req.body.bidang,
            user_created    : req.auth.id,
            created_at      : localISOTime
        };
        // console.log(bidangBelanja);
        bidangBelanja.insertBidangBelanja(bidangBelanjaData)
        .then(row =>{
            res.status(201).json({message: `Bidang Belanja saved`})
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({message: error});
    }
}


const updateBidangBelanja = async (req, res) => {
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const bidangBelanjaById = await bidangBelanja.getBidangBelanjaById(id);
        if(!bidangBelanjaById){
            res.status(201).json({message : `Bidang Belanja with id ${id} not available`});
            return false;
        }
        const bidangBelanjaData ={
            bidang      : req.body.bidang,
            updated_at  : localISOTime
        };
        bidangBelanja.editBidangBelanja(bidangBelanjaData, id)
        .then(row =>{
          res.status(201).json({message: `Bidang Belanja with id ${id} has been updated`});
        })
        .catch(err =>{
            res.status(400).json({message: err});
        })
    } catch (error) {
        // console.log(error);
        res.status(500).json({message: error});
    }
}

const deleteBidangBelanja = async (req, res) =>{
    try {
        const id = req.params.id;
        if(!id){
            res.status(201).json({message: "Parameter id can't be empty"});
            return false;
        }
        const bidangBelanjaById = await bidangBelanja.getBidangBelanjaById(id);
        if(!bidangBelanjaById){
            res.status(201).json({message: `Bidang Belanja with id ${id} not available`});
            return false;
        }
        bidangBelanja.deleteBidangBelanja(id)
        .then(row =>{
            res.status(201).json({message : `Bidang Belanja with id ${id} has been deleted`});
        })
        .catch(err =>{
            res.status(400).json({message : err});
        })
    } catch (error) {
        res.status(500).json({message : error});
    }
}

module.exports= {
    getAllBidangBelanja,
    getBidangBelanjaById,
    createBidangBelanja,
    updateBidangBelanja,
    deleteBidangBelanja
}