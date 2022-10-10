const joi = require('joi');

const validPendapatan = joi.object({
    jumlah : joi.number().integer().required(),
    sumber : joi.required()
});

const validationPendapatan = async (req, res, next) => {
    try {
        const options = {
            abortEarly  : false,
            allowUnknow : true,
            stripUnknow : true
        };
        const value = await validPendapatan.validate(req.body, options);
        if(value.error){
            res.json({error : value.error.details[0].message});
            return false;
        } 
        next();
    } catch (error) {
        // console.log(error);
        res.status(400).json({error : error})
    }
}

module.exports = {
    validationPendapatan,
}