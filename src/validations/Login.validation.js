const joi = require('joi');

const validLogin = joi.object({
    username : joi.required(),
    password : joi.required()
});

const validationLogin = async (req, res, next) => {
    try {
        const options = {
            abortEarly  : false,
            allowUnknow : true,
            stripUnknow : true
        };
        const value = await validLogin.validate(req.body, options);
        console.log(req.body);
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
    validationLogin,
}