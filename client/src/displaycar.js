import React from 'react';
const dayjs = require('dayjs')

function DisplayCar(props) {

    let days = props.rent.endDate.diff(props.rent.startDate)
let cars = props.cars.map(car => {
  return  { ...car, 'amount:': car.fessperdays * days}
}) 
console.log(`car`, car)


    return (
        <div>
            bonhour
            
        </div>
    );
}

export default DisplayCar;