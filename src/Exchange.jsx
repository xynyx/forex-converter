import React from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";

export default function Exchange({ changeCurrency }) {
  return (
    <div>
      <CurrencyOne changeCurrency={changeCurrency} />
      <button>Swap</button>
      <CurrencyTwo changeCurrency={changeCurrency} />
      <h2>TEST</h2>
    </div>
  );
}
