const userService = require('../service/user');

exports.authenticate = async (req, res, next) => {
    try {
        const user = await userService.authenticate(req.body);
        
            if (!user) {
                return res.status(400).json({message: 'Username or password in incorrect.'});
            }

            res.status(200).json(user);
    } catch(error) {
        next(error);
    }
}

exports.register = async (req, res, next) => {
    try {
        await userService.create(req.body);
            res.status(201).json({message: 'User created'});
    } catch(error) {
        next(error);
    }
}

exports.getAll = async (req, res, next) => {
    try {
        const users = await userService.getAll();
            res.status(201).json(users);
    } catch(error) {
        next(error);
    }
}