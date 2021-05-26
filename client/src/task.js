import React from 'react';

function Task(props) {

    async function getValues() {
        const car = ['/category', '/brand']
        let response = car.map(url => fetch('http://localhost:3000' + url))
        let [a, b] = await Promise.all(response.map(r =>
            r.then(res =>
                res.json()
            )
        ))
    }
getValues()
    return (
        <div>
bonjour
        </div>
    );
}

export default Task;