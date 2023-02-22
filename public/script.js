const createPassword = async (symbol, upper, lower, num, service, url, len) => {
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
            len
        }),
    });
    return pasRes;
};

const getPasswords = async () => {
    const res = await fetch('/api/passwords');
    return res;
};

const load = async () => {
    const res = await getPasswords();
    let passwords = await res.json();
    console.log('loading...');
    console.log(passwords);

    //create list
    //grab the passList from HTML
    let passList = document.querySelector('#passList');
    while(passList.firstChild){
        passList.firstChild.remove()
    }
    //loop passwords and add each service name to passList
    for (let i = 0; i < passwords.length; i++) {
        const element = passwords[i];
        let newElement = document.createElement('div');
        newElement.innerHTML = element.service + ' ' + element.url;
        passList.appendChild(newElement);
    }
};
load();

const generatePassword = async () => {
    // TODO: get the values from the checkbox for upper lower,symbol,num
    let symbol = document.getElementById('symbol')?.checked;
    let num = document.getElementById('num')?.checked;
    let upper = document.getElementById('upper')?.checked;
    let lower = document.getElementById('lower')?.checked;

    // TODO: get the text from the service input
    let service = document.getElementById('service')?.value;

    // TODO: get the text from url input
    let url = document.getElementById('url')?.value;

    let len = document.getElementById('len')?.value;

    console.log(service, url, symbol, num,upper, lower);
    const taskRes = await createPassword(
        symbol,
        upper,
        lower,
        num,
        service,
        url,
        len
    );
    let newPassword = await taskRes.json();
    console.log('generating...', newPassword);
    load()
};
