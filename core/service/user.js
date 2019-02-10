const config = require('../../config');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('helpers/db');

const User = db.User

exports.authenticate = async ({email, password}) => {
    const user = await User.findOne({email});

    if (user && bcrypt.compareSync(password, user.hash)) {
        const {hash, ...userWithoutHash} = user.toObject();
        const token = jwt.sign({sub: user.id, role: user.role}, config.secret);

        return {...userWithoutHash, token}
    }
}

exports.create = async (userParam) => {
    if (await User.findOne({email: userParam.email})) {
        throw `Email ${userParam.email} is already taken.`;
    }

    const user = new User(userParam);

    if (userParam.password) {
        user.hash = bcrypt.hashSync(userParam.password, 10);
    }

    await user.save();
}

exports.getAll = async () => {
    return await User.find().select('-hash');
}