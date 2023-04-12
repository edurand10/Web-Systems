//import logo from './logo.svg';
import './App.css'; 
import { Link } from 'react-router-dom';
//import {StarshipMainpage} from './starships.js'
//import {CharacterMainpage} from './characters.js'
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 
function App() {
  return (
    <div>
      <h3>Please click below for further information: </h3>
      {/*<br />
      <b></b>
       <p>the price is ${costInCredits}</p>
      <p>the capacity is {passengers} people</p> */}
      <nav>
        <Link to="/characterMainId" exact= "true">
          Characters |
        </Link>
        <Link to="/starshipMainId" exact="true">
           Starships
        </Link>
      </nav>
      <br />
    </div>
  );
}

export default App;
