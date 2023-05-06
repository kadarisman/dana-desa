const user = require('../models/UserModel');
const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

const login =  async (req, res) => {
    try {
        const {username, password} = req.body;
        const userByUsername = await user.getuserByUsername(username); 
        // console.log(userByUsername)       
        if(!userByUsername){
            res.status(401).json({error : `Username '${username}' not found`});
            return false; 
        }
        const validPassword = await bcrypt.compare(password, userByUsername.password);
        // const userLogin = await user.loginCheck(username, validPassword);
        if(!validPassword){
            res.status(401).json({error : 'Password Wrong!'});
            return false;            
        }
        const token = jwt.sign({
            id : userByUsername.id,
            nama : userByUsername.nama,
        },process.env.SECRET);

        res.status(201).json({token : token, nama: userByUsername.nama, id: userByUsername.id});
        var decode = jwt.verify(token, process.env.SECRET);
        req.auth = decode;
    } catch (error) {
        console.log(error);
        res.status(401).json({error : error});
    }   
}

module.exports = {
    login
}