import React, { useEffect, useState } from 'react';
import { CategoryBox } from "./list_checkbox"


function MakeRental(props) {
    const [loading, setLoading] = useState(true)
    const [details, setdetails] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        async function getValues() {
            const car = ['/category', '/brand']
            let response = car.map(url => fetch('http://localhost:3000'+ url))
            let [a, b] = await Promise.all(response.map(r =>
                r.then(res =>
                    res.json()
                )
            ))
            setdetails([a, b])
            setLoading(false)
        }
        getValues()
            console.log(`details`, details)
    }, [])

    return (
     <div> {
            loading ? 'waiting' : <> <CategoryBox category={details[0]}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}

            />
                <span style={{ color: "red" }}> {errorMessage.category}</span>
            </>
        }</div>  
    );
}

export default MakeRental;