  const generate = require('../generate');

const createPassword = async (symbol, upper, lower, num, service, url) => {
    const pasRes = await fetch('/api/passwords', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            symbol,
            upper,
            lower,
            num,
            service,
            url,
        }),
    });
    return pasRes;
};

const getPasswords = async () => {
    const res = await fetch('/api/passwords');
    return res;
};

const load = async (req, res, next) => {
    const taskRes = await createPassword();
    let newPassword = await taskRes.json();
    console.log('loading...', newPassword);
};
load();

//make function that is called by the html button, the function will call the createPassword api endpoint

const gen = async (req, res) => {
    fetch('/api/passwords')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let gen = generate();

            return res.status(200).json(gen);
        })
        .catch((error) => console.log(error));
};
gen()