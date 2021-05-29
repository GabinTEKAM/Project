let querystring = require('query-string')

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
    let search = querystring.stringify({'id_cat':category}, {arrayFormat:'bracket'})
    let response = await fetch('/car/?'+ search)
    .then(res=> res.json())
    return response
}


async function addRental(rent) {
    let response = await fetch('/api/rental', 
    { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rent)} )

}

let API = {getValues, getCar, addRental}
export default API