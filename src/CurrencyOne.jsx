import React, { useState } from "react";

export default function CurrencyOne({
  changeCurrency,
  convertCurrency,
  currency,
  changeValue,
  currencyValue
}) {
  const handleCurrencyChange = e => {
    changeCurrency({
      ...currency,
      currencyOne: e.target.value,
    });
  };

  const handleValueChange = e => {
    console.log('e', e.target.value)
    changeValue({...currencyValue, currencyOne: e.target.value})
  }


  return (
    <div>
      <div className="currency-one-container">
        {" "}
        <select onChange={handleCurrencyChange} id="currency-one">
          <option value="AED">&#xf0d7; AED</option>
          <option value="ARS">&#xf0d7; ARS</option>
          <option value="AUD">&#xf0d7; AUD</option>
          <option value="BGN">&#xf0d7; BGN</option>
          <option value="BRL">&#xf0d7; BRL</option>
          <option value="BSD">&#xf0d7; BSD</option>
          <option value="CAD" selected>
            &#xf0d7; CAD
          </option>
          <option value="CHF">&#xf0d7; CHF</option>
          <option value="CLP">&#xf0d7; CLP</option>
          <option value="CNY">&#xf0d7; CNY</option>
          <option value="COP">&#xf0d7; COP</option>
          <option value="CZK">&#xf0d7; CZK</option>
          <option value="DKK">&#xf0d7; DKK</option>
          <option value="DOP">&#xf0d7; DOP</option>
          <option value="EGP">&#xf0d7; EGP</option>
          <option value="EUR">&#xf0d7; EUR</option>
          <option value="FJD">&#xf0d7; FJD</option>
          <option value="GBP">&#xf0d7; GBP</option>
          <option value="GTQ">&#xf0d7; GTQ</option>
          <option value="HKD">&#xf0d7; HKD</option>
          <option value="HRK">&#xf0d7; HRK</option>
          <option value="HUF">&#xf0d7; HUF</option>
          <option value="IDR">&#xf0d7; IDR</option>
          <option value="ILS">&#xf0d7; ILS</option>
          <option value="INR">&#xf0d7; INR</option>
          <option value="ISK">&#xf0d7; ISK</option>
          <option value="JPY">&#xf0d7; JPY</option>
          <option value="KRW">&#xf0d7; KRW</option>
          <option value="KZT">&#xf0d7; KZT</option>
          <option value="MXN">&#xf0d7; MXN</option>
          <option value="MYR">&#xf0d7; MYR</option>
          <option value="NOK">&#xf0d7; NOK</option>
          <option value="NZD">&#xf0d7; NZD</option>
          <option value="PAB">&#xf0d7; PAB</option>
          <option value="PEN">&#xf0d7; PEN</option>
          <option value="PHP">&#xf0d7; PHP</option>
          <option value="PKR">&#xf0d7; PKR</option>
          <option value="PLN">&#xf0d7; PLN</option>
          <option value="PYG">&#xf0d7; PYG</option>
          <option value="RON">&#xf0d7; RON</option>
          <option value="RUB">&#xf0d7; RUB</option>
          <option value="SAR">&#xf0d7; SAR</option>
          <option value="SEK">&#xf0d7; SEK</option>
          <option value="SGD">&#xf0d7; SGD</option>
          <option value="THB">&#xf0d7; THB</option>
          <option value="TRY">&#xf0d7; TRY</option>
          <option value="TWD">&#xf0d7; TWD</option>
          <option value="UAH">&#xf0d7; UAH</option>
          <option value="USD">&#xf0d7; USD</option>
          <option value="UYU">&#xf0d7; UYU</option>
          <option value="VND">&#xf0d7; VND</option>
          <option value="ZAR">&#xf0d7; ZAR</option>
        </select>
        <input onChange={handleValueChange} type="number"></input>
      </div>
    </div>
  );
}
