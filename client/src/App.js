import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import MakeRental from "./makerental";

function App() {
  return (
    <div className="App">
      <Container fluid='sm'>
         <MakeRental />
      </Container>
     
    </div>
  );
}

export default App;
