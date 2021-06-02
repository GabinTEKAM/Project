import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router';
import ListBody from "./list_cars";
const dayjs = require('dayjs')

function DisplayCar(props) {
    const location = useLocation()
    const rental = useState(location.state?location.state:'')
    console.log(`rental`, rental)
    const endDate= (location.state?location.state.endDate:'')
    const startDate = (location.state?location.state.startDate:'')
    const [cars, setCars] = useState(location.state?location.state.cars:'')
    let days = dayjs(endDate).diff(dayjs(startDate), 'day')
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
       const  carAmount=()=>{
           let test = cars
       test.map(car =>
            car.amount = (car.feesperday * days)
        )
        setCars(test)
        setLoading(true)
       }
    carAmount()
    }
        , [] )



    return (
        <div> {loading ? 
        <Table>
            <ListBody.CarTitle />
            <tbody>
            {
             cars.map(car =>
                <ListBody.CarRow rental={rental} key={car.id_car } car = {car} />) }
       </tbody>
        </Table>   : '....wait.' }
        </div>
    );
}

export default DisplayCar;