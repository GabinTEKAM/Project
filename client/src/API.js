async function getValues() {
 
    const car = ['/category', '/brand']
    let response = await car.map(url => fetch(url))
    return await Promise.all(response.map(r =>
        r.then(res =>
            res.json()
        )
    ))
}

let API = {getValues}

export default API