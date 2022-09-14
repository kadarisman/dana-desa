const joi = require('joi');

const validDetailBelanja = joi.object({
    id_bidang : joi.required(),
    jumlah : joi.number().integer().required(),
    tanggal : joi.required()
});

const validationDetailBelanja = async (req, res, next) => {
    try {
        const options = {
            abortEarly  : false,
            allowUnknow : true,
            stripUnknow : true
        };
        const value = await validDetailBelanja.validate(req.body, options);
        if(value.error){
            res.json({error : value.error.details[0].message});
            return false;
        } 
        next();
    } catch (error) {
        console.log(error);
        res.status(400).json({error : error})
    }
}

module.exports = {
    validationDetailBelanja,
}