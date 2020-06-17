import React from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";

export default function Exchange({ ...props }) {
  return (
    <div>
      <CurrencyOne {...props} />
      <button>Swap</button>
      <CurrencyTwo {...props} />
      <h2>
        {props.currencyValue.currencyOne} {props.currency.currencyOne} ={" "}
        {props.currencyValue.currencyTwo} {props.currency.currencyTwo}
      </h2>
    </div>
  );
}
