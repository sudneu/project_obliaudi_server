const User = require('../models/User');

module.exports = {
    getAllUsers : (req,res, next) => {
        const users = User.find();

        res.json({
            status: "success",
            count: users.length(),
            data: user
        })
    },
    getAUser : (req, res, next)=>{
        res.json({
            status:"success",
            data: "a single user"
        })
    },
    updateAUser: (req, res,next) => {
        let user = User.findById(req.params.id);
        if(!user){
            res.json({
                status: "failure",
                data: "There is no such user"
            })
        }

        const {name, email, password} = req.body;

        user = User.findByIdAndUpdate({
            name,
            email,
            password
        });

        res.json({
            status: "success",
            data: user
        })
    },
    deleteAUser: (req,res,next) => {
        User.findByIdAndRemove(req.params.id);
        const user = User.find({});
        res.json({
           status: "success",
           data: user 
        })
    } 
}  