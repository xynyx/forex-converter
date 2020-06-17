import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Exchange from "./Exchange";
import Chart from "./Chart";

function App() {
  const [currency, changeCurrency] = useState({
    currencyOne: "CAD",
    currencyTwo: "USD",
  });
  const [currencyValue, changeValue] = useState({
    currencyOne: 1,
    currencyTwo: "",
  });

  const [mapData, changeMapData] = useState();
  console.log("currencyValue", currencyValue);

  console.log("currency", currency);

  const getWeeklyExchange = () => {
    axios
      .get(
        `https://api.exchangeratesapi.io/history?start_at=2020-04-10&end_at=2020-06-17&base=${currency.currencyOne}`
      )
      .then(response => {
        // const weekAgo = Date.now - 7
        // const today = new Date(Date.now);
        // console.log('weekAgo', weekAgo)
        // console.log('response', response.data)
        // console.log(Object.entries(response.data.rates))

        const dates = Object.entries(response.data.rates);
        const newDates = dates.sort((date1, date2) => {
          if (date1[0].split("-")[1] === date2[0].split("-")[1]) {
            return date1[0].split("-")[2] - date2[0].split("-")[2];
          } else {
            return date1[0].split("-")[1] - date2[0].split("-")[1];
          }
        });

        const newD = newDates.map(date => {
          const converted = convertCurrency(date[1][currency.currencyTwo]);
          return { date: date[0], value: converted };
        });

        console.log("newDates", newDates);
        console.log("new", newD);
        changeMapData(newD);

        // const weeklyData = response.data.rates.map(rate => {
        //   console.log(rate)
        // })
        // return weeklyData
      });
  };

  useEffect(() => {
    getWeeklyExchange();
    // axios.get("https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/USD")
    // .then(response => {
    //   console.log('data', response.data.conversion_rates)
    // })

    // axios.get(`https://v6.exchangerate-api.com/v6/c298a3bc90706fb35412edbd/latest/${currency.currencyOne}`)
    axios
      .get(
        `https://api.exchangeratesapi.io/latest?base=${currency.currencyOne}
  `
      )

      .then(response => {
        const conversionValue = response.data.rates[currency.currencyTwo];
        // console.log('conversionValue', conversionValue)
        // console.log("test", convertCurrency(conversionValue));

        changeValue({
          ...currencyValue,
          currencyTwo: convertCurrency(conversionValue),
        });
      });
  }, [currency, currencyValue.currencyOne]);

  const convertCurrency = conversionRate => {
    const converted = currencyValue.currencyOne * conversionRate;
    return converted;
  };

  // console.log('currency', currency.currencyOne)

  // console.log('currency', currency.currencyTwo)
  return (
    <div className="App">
      <div className="container">
        <h1>FOREX Converter</h1>
        <Exchange
          currency={currency}
          convertCurrency={convertCurrency}
          changeCurrency={changeCurrency}
          changeValue={changeValue}
          currencyValue={currencyValue}
        />
        <Chart mapData={mapData} />
      </div>
    </div>
  );
}

export default App;
