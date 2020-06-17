import React, { useState } from "react";
import "./App.css";
import Exchange from "./Exchange";

function App() {
  const [currency, changeCurrency] = useState({
    currencyOne: "CAD",
    currencyTwo: "USD",
  });

  console.log('currency', currency.currencyOne)

  console.log('currency', currency.currencyTwo)
  return (
    <div className="App">
      <h1>FOREX Converter</h1>
      <Exchange changeCurrency={changeCurrency} />
    </div>
  );
}

export default App;
