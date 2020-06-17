import React from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";

export default function Exchange({ changeCurrency, currency }) {
  return (
    <div>
      <CurrencyOne currency={currency} changeCurrency={changeCurrency} />
      <button>Swap</button>
      <CurrencyTwo currency={currency} changeCurrency={changeCurrency} />
      <h2>TEST</h2>
    </div>
  );
}
