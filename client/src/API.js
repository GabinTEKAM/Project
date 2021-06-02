let querystring = require('query-string')
const axios = require('axios');
async function getValues() {

    const car = ['/category', '/brand']
    let response = await car.map(url => fetch(url))
    return await Promise.all(response.map(r =>
        r.then(res =>
            res.json()
        )
    ))
}


async function getCar(category) {
    console.log(`category`, category)
    let search = querystring.stringify({ 'id_cat': category }, { arrayFormat: 'bracket' })
    let response = await axios.get('/car/?' + search)
        .then(res => res.data)
    return response
}


async function addRental(rent) {
    let response = await fetch('/api/rental',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rent)
        }).then(res => res.json())

    return response
}

async function login(credential){
    let response = await fetch('/api/login', 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credential)
    }).then(res => res.json())
    return response
}

async function signUp(detail) {
    let response = await fetch('/api/user', 
    { method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(detail)
    }).then(res => res.json())
    return response
}


let API = { getValues, getCar, addRental, login, signUp }
export default API

