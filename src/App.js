import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Exchange from "./Exchange";
import Chart from "./Chart";
import Paper from "@material-ui/core/Paper";
import date from "date-and-time";

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

  useEffect(() => {
    // Get graph data from now to 3 months ago
    const now = new Date();
    const threeMonthsAgo = date.format(date.addMonths(now, -3), "YYYY-MM-DD");

    Promise.all([
      axios.get(
        `https://api.exchangeratesapi.io/latest?base=${currencyOne.currency}
  `
      ),
      axios.get(
        `https://api.exchangeratesapi.io/history?start_at=${threeMonthsAgo}&end_at=${date.format(
          now,
          "YYYY-MM-DD"
        )}&base=${currencyOne.currency}`
      ),
    ]).then(response => {
      // Get conversion mulitplier using the inputted currency as the key
      const conversionValue = response[0].data.rates[currencyTwo.currency];

      // Get converted value
      const convertCurrency = conversionRate => {
        const converted = currencyOne.value * conversionRate;
        return converted.toFixed(2);
      };

      const converted = convertCurrency(conversionValue);

      changeCurrencyTwo(prev => ({
        ...prev,
        value: converted,
      }));

      // Get set of date values
      const dates = Object.entries(response[1].data.rates);
      // The API returns dates poorly formatted -> this will sort them by date
      const newDates = dates.sort((date1, date2) => {
        if (date1[0].split("-")[1] === date2[0].split("-")[1]) {
          return date1[0].split("-")[2] - date2[0].split("-")[2];
        } else {
          return date1[0].split("-")[1] - date2[0].split("-")[1];
        }
      });

      // Pattern for graph label (easier to read)
      const pattern = date.compile("MMM D, 'YY");

      // Convert dates into more accessible format, and return each date & conversion in a format the graph can use
      const newDatesMapped = newDates.map(day => {
        const splitDate = day[0].split("-");
        const formattedDate = date.format(
          new Date(splitDate[0], splitDate[1] - 1, splitDate[2]),
          pattern
        );
        const converted = convertCurrency(day[1][currencyTwo.currency]);
        return { date: formattedDate, Exchange: converted };
      });

      changeMapData(newDatesMapped);
    });
  }, [currencyOne, currencyTwo.currency]);

  return (
    <div className="App">
      <Paper elevation={24} className="container">
        <h1>FOREX Converter</h1>
        <Exchange
          currencyOne={currencyOne}
          currencyTwo={currencyTwo}
          changeCurrencyOne={changeCurrencyOne}
          changeCurrencyTwo={changeCurrencyTwo}
        />
        <Chart mapData={mapData} />
      </Paper>
    </div>
  );
}

export default App;
