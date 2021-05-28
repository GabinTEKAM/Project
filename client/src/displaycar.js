import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useLocation } from 'react-router';
import ListBody from "./list_cars";
const dayjs = require('dayjs')

function DisplayCar(props) {
    const location = useLocation()
    const [endDate, setEndDate] = useState(location.state.endDate)
    const [startDate, setStartDate] = useState(location.state.startDate)
    const [cars, setCars] = useState(location.state.cars)
    let days = dayjs(endDate).diff(dayjs(startDate), 'day')
    const [loading, setLoading] = useState(false)
    useEffect(() => {

        let test = cars
        let car_price = test.map(car =>
            car.amount = (car.feesperday * days)
        )
        setCars(test)
        setLoading(true)
    }
        , [])



    return (
        <div> {loading ? 
        <Table>
            <ListBody.CarTitle />
            <tbody>
            {cars.map(car =>
               <ListBody.CarRow key={car.id_car } car = {car} />) }
       </tbody>
        </Table>   : '....wait.' }
        </div>
    );
}

export default DisplayCar;