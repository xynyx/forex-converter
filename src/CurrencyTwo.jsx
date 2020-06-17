import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CurrencyTwo({
  changeCurrency,
  currency,
  currencyValue,
}) {
  const classes = useStyles();

  const handleCurrencyChange = e => {
    changeCurrency({ ...currency, currencyTwo: e.target.value });
  };
  return (
    <div>
      <div className="currency-two-container">
        {" "}
        <FormControl className={classes.formControl}></FormControl>
        <Select
          value={currency.currencyTwo}
          onChange={handleCurrencyChange}
          id="currency-one"
        >
          <MenuItem value="AED">&#xf0d7; AED</MenuItem>
          <MenuItem value="ARS">&#xf0d7; ARS</MenuItem>
          <MenuItem value="AUD">&#xf0d7; AUD</MenuItem>
          <MenuItem value="BGN">&#xf0d7; BGN</MenuItem>
          <MenuItem value="BRL">&#xf0d7; BRL</MenuItem>
          <MenuItem value="BSD">&#xf0d7; BSD</MenuItem>
          <MenuItem value="CAD">&#xf0d7; CAD</MenuItem>
          <MenuItem value="CHF">&#xf0d7; CHF</MenuItem>
          <MenuItem value="CLP">&#xf0d7; CLP</MenuItem>
          <MenuItem value="CNY">&#xf0d7; CNY</MenuItem>
          <MenuItem value="COP">&#xf0d7; COP</MenuItem>
          <MenuItem value="CZK">&#xf0d7; CZK</MenuItem>
          <MenuItem value="DKK">&#xf0d7; DKK</MenuItem>
          <MenuItem value="DOP">&#xf0d7; DOP</MenuItem>
          <MenuItem value="EGP">&#xf0d7; EGP</MenuItem>
          <MenuItem value="EUR">&#xf0d7; EUR</MenuItem>
          <MenuItem value="FJD">&#xf0d7; FJD</MenuItem>
          <MenuItem value="GBP">&#xf0d7; GBP</MenuItem>
          <MenuItem value="GTQ">&#xf0d7; GTQ</MenuItem>
          <MenuItem value="HKD">&#xf0d7; HKD</MenuItem>
          <MenuItem value="HRK">&#xf0d7; HRK</MenuItem>
          <MenuItem value="HUF">&#xf0d7; HUF</MenuItem>
          <MenuItem value="IDR">&#xf0d7; IDR</MenuItem>
          <MenuItem value="ILS">&#xf0d7; ILS</MenuItem>
          <MenuItem value="INR">&#xf0d7; INR</MenuItem>
          <MenuItem value="ISK">&#xf0d7; ISK</MenuItem>
          <MenuItem value="JPY">&#xf0d7; JPY</MenuItem>
          <MenuItem value="KRW">&#xf0d7; KRW</MenuItem>
          <MenuItem value="KZT">&#xf0d7; KZT</MenuItem>
          <MenuItem value="MXN">&#xf0d7; MXN</MenuItem>
          <MenuItem value="MYR">&#xf0d7; MYR</MenuItem>
          <MenuItem value="NOK">&#xf0d7; NOK</MenuItem>
          <MenuItem value="NZD">&#xf0d7; NZD</MenuItem>
          <MenuItem value="PAB">&#xf0d7; PAB</MenuItem>
          <MenuItem value="PEN">&#xf0d7; PEN</MenuItem>
          <MenuItem value="PHP">&#xf0d7; PHP</MenuItem>
          <MenuItem value="PKR">&#xf0d7; PKR</MenuItem>
          <MenuItem value="PLN">&#xf0d7; PLN</MenuItem>
          <MenuItem value="PYG">&#xf0d7; PYG</MenuItem>
          <MenuItem value="RON">&#xf0d7; RON</MenuItem>
          <MenuItem value="RUB">&#xf0d7; RUB</MenuItem>
          <MenuItem value="SAR">&#xf0d7; SAR</MenuItem>
          <MenuItem value="SEK">&#xf0d7; SEK</MenuItem>
          <MenuItem value="SGD">&#xf0d7; SGD</MenuItem>
          <MenuItem value="THB">&#xf0d7; THB</MenuItem>
          <MenuItem value="TRY">&#xf0d7; TRY</MenuItem>
          <MenuItem value="TWD">&#xf0d7; TWD</MenuItem>
          <MenuItem value="UAH">&#xf0d7; UAH</MenuItem>
          <MenuItem value="USD">&#xf0d7; USD</MenuItem>
          <MenuItem value="UYU">&#xf0d7; UYU</MenuItem>
          <MenuItem value="VND">&#xf0d7; VND</MenuItem>
          <MenuItem value="ZAR">&#xf0d7; ZAR</MenuItem>
        </Select>
        <FormControl />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={currencyValue.currencyTwo}
        />
      </div>
    </div>
  );
}
