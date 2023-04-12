import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to the {props.passedproduct.productname}!</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with emdurand!
        </a>
        <h3>{props.passedproduct.productname} is a {props.passedproduct.productcategory} and costs {props.passedproduct.productprice}</h3>
      </header>
    </div>
  );
}

export default App;
