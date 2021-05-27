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
let API = {getValues, getCar}

export default API