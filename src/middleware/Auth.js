const jwt    = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token     = authHeader && authHeader.split(' ')[1];
        if(token == null ){
            res.status(401).json({message: 'Unauthorized'});
            return false;
        }
        var decode = jwt.verify(token, process.env.SECRET);
        req.auth = decode; 
        next();
    } catch (error) {
        res.status(401).json({message: error});       
    }
}

module.exports = {
    isAuth
}