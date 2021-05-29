import React from 'react';
import Payment from './payement'

function CarData(props) {
    return (<>
     <td> {props.car.cat_name}</td>
     <td> {props.car.brand_name}</td>
     <td> {props.car.model}</td>
     <td> {props.car.amount}</td>
     <td>  
         <Payment rental={props.rental} amount ={props.car.amount} car = {props.car.id_car} /> </td>

   </> );
}



function CarRow(props) {
    return (
      <tr>
          <CarData  rental={props.rental} car= {props.car} />
      </tr>
    );
}


function CarTitle(props) {
    return (
        <thead>
      <tr>
        <th> Category</th>
        <th>brand</th>
        <th>Model</th>
        <th>Amount</th>
      </tr>
    </thead>
    );
}


const ListBody = {CarTitle, CarRow}
export default ListBody;

