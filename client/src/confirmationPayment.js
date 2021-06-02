import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SucessPayment(props) {
    const [show, setShow] = useState(true);
  
    const handleClose = () => setShow(false);
  
    return (
      <>       
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Successful Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your payment is successful 
            your rental number is : {props.reservationNumber}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default SucessPayment