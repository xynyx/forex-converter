import React from "react";
import CurrencyOne from "./CurrencyOne";
import CurrencyTwo from "./CurrencyTwo";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SwapVertIcon from "@material-ui/icons/SwapVert";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Exchange({ ...props }) {
  const classes = useStyles();
  const swapExchange = () => {
    props.changeCurrencyOne(prev => ({
      ...prev,
      currency: props.currencyTwo.currency,
    }));

    props.changeCurrencyTwo(prev => ({
      ...prev,
      currency: props.currencyOne.currency,
    }));
  };

  return (
    <div>
      <CurrencyOne {...props} />
      <Button
        onClick={swapExchange}
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<SwapVertIcon />}
      >
        Swap
      </Button>
      <CurrencyTwo {...props} />
      <h2>
        {props.currencyOne.value} {props.currencyOne.currency} ={" "}
        {props.currencyTwo.value} {props.currencyTwo.currency}
      </h2>
    </div>
  );
}
