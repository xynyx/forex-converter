import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Exchange from "./Exchange";

function App() {
  const [currency, changeCurrency] = useState({
    currencyOne: "CAD",
    currencyTwo: "USD",
  });

  console.log('currency', currency)

useEffect(() => {
  // axios.get("https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/USD")
  // .then(response => {
  //   console.log('data', response.data.conversion_rates)
  // })
  console.log('currencyOne', currency.currencyOne)
  axios.get(`https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/${currency.currencyOne}`)
  .then(response => {
    console.log('data', response.data.conversion_rates)
  })
}, [currency])

const convertCurrency = baseCurrency => {
  axios.get(`https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/${baseCurrency}`)
  .then(response => {
    console.log('data', response.data.conversion_rates)
  })
}


  // console.log('currency', currency.currencyOne)

  // console.log('currency', currency.currencyTwo)
  return (
    <div className="App">
      <h1>FOREX Converter</h1>
      <Exchange currency={currency} convertCurrency={convertCurrency} changeCurrency={changeCurrency} />
    </div>
  );
}

export default App;
