import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import API from './API';
import DATE from './date';
import Driver from './driver';
import { CategoryBox } from "./list_checkbox"
import OPTION from './option_rent';
import { Redirect } from 'react-router-dom'

function MakeRental(props) {
    const [cars, setCars] = useState([]);
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(true)
    const [details, setdetails] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [errorMessage, setErrorMessage] = useState({});
    const [validated, setValidated] = useState(false);
    const [startDate, setStartdate] = useState('')
    const [endDate, setEnddate] = useState('')
    const [driverAge, setDriverAge] = useState('')
    const [distance, setdistance] = useState('')
    const [extraInsurance, setExtraInsurance] = useState()
    const [interactiveConfig, setInteractiveConfig] = useState()
    const [extraDriver, setExtraDriver] = useState('')

    useEffect(() => {

        API.getValues().then(res => {
            setdetails(res)
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        let a = []
        if (selectedCategory.length) {
                API.getCar(selectedCategory)
                .then(res=> console.log(`res`, res))
        }
        else setCars()
      

    }, [selectedCategory])
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity()) {
            //    event.preventDefault(); 
            //     event.stopPropagation();
            let rent = {
                startDate: startDate,
                endDate: endDate,
                category: selectedCategory,
                extraInsurance: extraInsurance,
                extraDriver: parseInt(extraDriver),
                driverAge: parseInt(driverAge),
                distance: parseInt(distance),
                interactiveConfig: interactiveConfig
            }

        }
        else {
            event.preventDefault();
            event.stopPropagation();
            let err = {}
            if (!selectedCategory.length) err.category = 'select a category'
            if (interactiveConfig === undefined) err.interactiveConfig = 'do you want an automatic selection?'
            if (interactiveConfig === undefined) err.extraInsurance = 'do you want an extra Insurance?'
            setErrorMessage(err)
            setValidated(true);
        }


    }

    return (
        <div>
            <Form validated={validated} noValidate onSubmit={handleSubmit} >
                <Row>
                    <DATE.StartDate startDate={startDate} setStartdate={setStartdate} />
                    <DATE.EndDate endDate={endDate} setEnddate={setEnddate} />
                    {
                        loading ? 'waiting' : <> <CategoryBox category={details[0]}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}

                        />
                            <span style={{ color: "red" }}> {errorMessage.category}</span>
                        </>
                    }
                    <Driver.DriverAge driverAge={driverAge} setDriverAge={setDriverAge} />
                    <Driver.ExtraDriver setExtraDriver={setExtraDriver} extraDriver={extraDriver} />
                    <OPTION.Distance distance={distance} setdistance={setdistance} />
                    <OPTION.ExtraInsurance setExtraInsurance={setExtraInsurance} extraInsurance={extraInsurance} />
                    <span style={{ color: "red" }} >{errorMessage.extraInsurance}</span>

                    <OPTION.AutoConfig setInteractiveConfig={setInteractiveConfig} interactiveConfig={interactiveConfig} />

                    <span style={{ color: "red" }} >{errorMessage.interactiveConfig}</span>

                </Row>
                <Button variant="primary" type="submit" >Confirm rental</Button>
                <Button variant="warning" type="reset">Reset</Button>
            </Form>



        </div>
    );
}

export default MakeRental;