import React from 'react';
import { Form,  } from 'react-bootstrap';

//remove attribute required to element if element if checked
let click = (element, name) => {
    let a = document.getElementsByName(name)
    if (element !== undefined) for (let elt of a) elt.removeAttribute('required')
}


function Distance(props) {
    return (
        <div>
            <Form.Group >
                <Form.Label inline='true '>Estimated Km per day: &nbsp; &nbsp;  </Form.Label>
                <Form.Control type='number' min='1'
                required placeholder='Enter estimated Km/day'
                 value={props.distance}
                    onChange={event => props.setdistance(event.target.value)}
                ></Form.Control>
                <Form.Control.Feedback type='invalid'>Enter distance er day </Form.Control.Feedback>
            </Form.Group>

        </div>
    );
}



function ExtraInsurance(props) {
    return (
        <div>
            <Form.Group>
                <Form.Label>Extra insurance  &nbsp; &nbsp; &nbsp; </Form.Label>

                <Form.Check inline >
                    <Form.Check.Input required name='extra' type='radio'
                        onClick={click(props.extraInsurance, 'extra')}
                        checked={props.extraInsurance === true ? "checked" : ''}
                        onChange={() => props.setExtraInsurance(true)}
                    />
                    <Form.Check.Label>Yes</Form.Check.Label>
                </Form.Check>
                <Form.Check inline>
                    <Form.Check.Input required type='radio'
                        name='extra'
                        checked={props.extraInsurance === false ? "checked" : ''}
                        onChange={() => props.setExtraInsurance(false)} onClick={click(props.extraInsurance, 'extra')}
                    />
                    <Form.Check.Label>No </Form.Check.Label>

                </Form.Check>
                <Form.Control.Feedback type='invalid'>Do you want extra Insurance?</Form.Control.Feedback>

            </Form.Group>
        </div>
    );
}


function AutoConfig(props) {
    return (
        <div>
            <Form.Group>
                <Form.Label>Interactive config &nbsp; &nbsp; &nbsp; </Form.Label>

                <Form.Check inline  >
                    <Form.Check.Input required name='autoconf' type='radio'
                        checked={props.interactiveConfig === true ? "checked" : ''}
                        onClick={click(props.interactiveConfig, 'autoconf')}
                        onChange={() => props.setInteractiveConfig(true)}
                    />
                    <Form.Check.Label>yes</Form.Check.Label>
                </Form.Check>
                <Form.Check inline>
                    <Form.Check.Input required name='autoconf' type= 'radio '
                        checked={props.interactiveConfig === false ? "checked" : ''}
                        onClick={click(props.interactiveConfig, 'autoconf')}
                        onChange={() => props.setInteractiveConfig(false)
                        } />
                    <Form.Check.Label> {props.interactiveConfig} No</Form.Check.Label>
                   
                </Form.Check>
            </Form.Group>
        </div>
    );
}

const OPTION = { Distance, ExtraInsurance, AutoConfig }
export default OPTION