const generate = require('../generate');


const Password = require('../models/Password');

const getPasswords = async (req, res) => {
    const passwordList = await Password.find({});
    res.status(200).json(passwordList);
};

const createPassword = async (req, res) => {
    const { symbol, upper, lower, num, service, url } = req.body;

    if ((!symbol && !upper && !lower && !num) || !service || !url) {
    }

    await Password.create({ symbol, upper, lower, num, service, url });

    let gen = generate()

    return res.status(200).json(gen);
};

module.exports = {
    getPasswords,
    createPassword,
};