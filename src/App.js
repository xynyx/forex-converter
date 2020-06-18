import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Exchange from "./Exchange";
import Chart from "./Chart";
import Paper from "@material-ui/core/Paper";

function App() {
  const [currencyTwo, changeCurrencyTwo] = useState({
    currency: "USD",
    value: 0,
  });

  const [currencyOne, changeCurrencyOne] = useState({
    currency: "CAD",
    value: 1,
  });


  const [mapData, changeMapData] = useState();

  const convertCurrency = conversionRate => {
    const converted = currencyOne.value * conversionRate;
    return converted.toFixed(4);
  };

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = () => Promise.all([
      axios.get(
        `https://api.exchangeratesapi.io/latest?base=${currencyOne.currency}
  `, {signal: abortController.signal}
      ),
      axios.get(
        `https://api.exchangeratesapi.io/history?start_at=2020-01-01&end_at=2020-06-17&base=${currencyOne.currency}`, {signal: abortController.signal}
      ),
    ]).then(response => {
      console.log("response[0].data.rates :>> ", response[0].data.rates);
      const conversionValue = response[0].data.rates[currencyTwo.currency];

      console.log('conversionValue :>> ', conversionValue);

      console.log('convertCurrency(conversionValue) :>> ', convertCurrency(conversionValue));
      changeCurrencyTwo(prev => ({
        ...prev,
        value: convertCurrency(conversionValue),
      }));
      console.log("currencyTwo", currencyTwo);
      const dates = Object.entries(response[1].data.rates);
      const newDates = dates.sort((date1, date2) => {
        if (date1[0].split("-")[1] === date2[0].split("-")[1]) {
          return date1[0].split("-")[2] - date2[0].split("-")[2];
        } else {
          return date1[0].split("-")[1] - date2[0].split("-")[1];
        }
      });

      const newDatesMapped = newDates.map(date => {
        const converted = convertCurrency(date[1][currencyTwo.currency]);
        return { date: date[0], Exchange: converted };
      });

      changeMapData(newDatesMapped);
    }).catch((e) => {
      if (!abortController.signal.aborted) {

      }
    })

    fetchData();

    return () => {
      abortController.abort();
    }

  }, [currencyOne, currencyTwo.currency]);

  return (
    <div className="App">
      <Paper elevation={24} className="container">
        <h1>FOREX Converter</h1>
        <Exchange
          currencyOne={currencyOne}
          currencyTwo={currencyTwo}
          convertCurrency={convertCurrency}
          changeCurrencyOne={changeCurrencyOne}
          changeCurrencyTwo={changeCurrencyTwo}
        />
        <Chart mapData={mapData} />
      </Paper>
    </div>
  );
}

export default App;
