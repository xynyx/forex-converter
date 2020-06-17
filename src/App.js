import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Exchange from "./Exchange";

function App() {
  const [currency, changeCurrency] = useState({
    currencyOne: "CAD",
    currencyTwo: "USD",
  });
  const [currencyValue, changeValue] = useState({
    currencyOne: 1,
    currencyTwo: ""
  });
  console.log('currencyValue', currencyValue)

  console.log("currency", currency);

  useEffect(() => {
    // axios.get("https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/USD")
    // .then(response => {
    //   console.log('data', response.data.conversion_rates)
    // })
    console.log("currencyOne", currency.currencyOne);
    // axios.get(`https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/${currency.currencyOne}`)
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${currency.currencyOne}
  `
      )

      .then(response => {
        console.log("data", response.data.rates);
        const conversionValue = response.data.rates[currency.currencyTwo];
        // console.log('conversionValue', conversionValue)
        // console.log("test", convertCurrency(conversionValue));
      
        changeValue({...currencyValue, currencyTwo: convertCurrency(conversionValue) })
      });
  }, [currency, currencyValue.currencyOne]);

  const convertCurrency = conversionRate => {
    console.log('currencyValue.currencyOne', currencyValue.currencyOne)
    const converted = currencyValue.currencyOne * conversionRate;
    return converted;
  };

  // console.log('currency', currency.currencyOne)

  // console.log('currency', currency.currencyTwo)
  return (
    <div className="App">
      <h1>FOREX Converter</h1>
      <Exchange
        currency={currency}
        convertCurrency={convertCurrency}
        changeCurrency={changeCurrency}
        changeValue={changeValue}
        currencyValue={currencyValue}
      />
    </div>
  );
}

export default App;
