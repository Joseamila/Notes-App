const userCtrl = {};
const User = require('../models/user')

    userCtrl.getUsers = async (req, res) =>{ 
    const user = await User.find();
    res.json(user)       
}

    userCtrl.createUser = async (req, res) =>{
        const { username } = req.body;
        const newUser = new User({ username })
        await newUser.save();
        res.json('user created')
}

    userCtrl.updateUser = async (req, res) =>{
        const { username } = req.body;
        await User.findOneAndUpdate(req.params.id, { username })
        res.json('user Updated')
    }
    
    userCtrl.deleteUser = async (req, res) =>{ 
        await User.findByIdAndDelete(req.params.id)
        res.json({Message: 'user deleted'})}

module.exports = userCtrl;