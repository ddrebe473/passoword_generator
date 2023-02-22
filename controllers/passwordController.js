const generate = require('../generate');


const Password = require('../models/Password');

const getPasswords = async (req, res) => {
    const passwordList = await Password.find({});
    res.status(200).json(passwordList);
};

const createPassword = async (req, res) => {
    const { symbol, upper, lower, num, service, url, len } = req.body;
    let includeNoCharsChoices = !symbol && !upper && !lower && !num;
    if (includeNoCharsChoices || !service || !url || len<=0) {
        return res.status(400).json(false);
    }
    
    let password = generate(symbol, upper, lower, num, len)
    
    await Password.create({ service, url, password });

    return res.status(200).json(true);

};

module.exports = {
    getPasswords,
    createPassword,
};