import React from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";

export default function Exchange({ ...props }) {
  console.log('props', props)
  const swapExchange = () => {
    props.changeCurrency({
      currencyOne: props.currency.currencyTwo,
      currencyTwo: props.currency.currencyOne
    })

    

  };
  return (
    <div>
      <CurrencyOne {...props} />
      <button onClick={swapExchange}>Swap</button>
      <CurrencyTwo {...props} />
      <h2>
        {props.currencyValue.currencyOne} {props.currency.currencyOne} ={" "}
        {props.currencyValue.currencyTwo} {props.currency.currencyTwo}
      </h2>
    </div>
  );
}
