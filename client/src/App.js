import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MakeRental from "./makerental";
import DisplayCar from './displaycar';
import Payment from './payement';
import  SuccesPayment  from "./confirmationPayment";

function App() {
  return (
    <div className="App" >
      <Router >
        <Container fluid='sm' >
          <Switch >
            < Route path='/home' exact >
              < MakeRental />
            </Route> 
            <Route path='/display_car'  >
              <DisplayCar />
            </Route>
            <Route path= '/payement_info'>
              <Payment />
            </Route>
            <Route path='/PuccesPayment'>
              <SuccesPayment />
            </Route>
          </Switch >
        </Container>
      </Router >
    </div>
  );
}

export default App;