import React from "react";
import gif from "../images/foodtruckthankyou.gif"
import '../App.css';

export default function ThankYou2() {
    return (
      <div className="thankyou">
        <header className="App-header">
            <img src={gif} className="thank-you" alt="food truck thank you" />
        </header>
      </div>
    );
}
  
