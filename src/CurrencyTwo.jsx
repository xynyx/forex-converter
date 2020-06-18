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
  changeCurrencyTwo,
  currencyTwo,
  currencyValue,
}) {
  const classes = useStyles();
  const handleCurrencyChange = e => {
    changeCurrencyTwo(prev => ({ ...prev, currency: e.target.value }));
  };
  return (
    <div>
      <div className="currency-container">
        {" "}
        <FormControl className={classes.formControl}></FormControl>
        <Select
          value={currencyTwo.currency}
          onChange={handleCurrencyChange}
          className="currency-dropdown"
        >
                   <MenuItem value="AUD"> AUD</MenuItem>
          <MenuItem value="BGN"> BGN</MenuItem>
          <MenuItem value="BRL"> BRL</MenuItem>
          <MenuItem value="CAD">CAD</MenuItem>
          <MenuItem value="CHF"> CHF</MenuItem>
          <MenuItem value="CNY"> CNY</MenuItem>
          <MenuItem value="CZK"> CZK</MenuItem>
          <MenuItem value="EUR"> EUR</MenuItem>
          <MenuItem value="GBP"> GBP</MenuItem>
          <MenuItem value="HKD"> HKD</MenuItem>
          <MenuItem value="HRK"> HRK</MenuItem>
          <MenuItem value="HUF"> HUF</MenuItem>
          <MenuItem value="IDR"> IDR</MenuItem>
          <MenuItem value="ILS"> ILS</MenuItem>
          <MenuItem value="INR"> INR</MenuItem>
          <MenuItem value="ISK"> ISK</MenuItem>
          <MenuItem value="JPY"> JPY</MenuItem>
          <MenuItem value="KRW"> KRW</MenuItem>
          <MenuItem value="MXN"> MXN</MenuItem>
          <MenuItem value="MYR"> MYR</MenuItem>
          <MenuItem value="NOK"> NOK</MenuItem>
          <MenuItem value="NZD"> NZD</MenuItem>
          <MenuItem value="PHP"> PHP</MenuItem>
          <MenuItem value="PKR"> PKR</MenuItem>
          <MenuItem value="PLN"> PLN</MenuItem>
          <MenuItem value="RON"> RON</MenuItem>
          <MenuItem value="RUB"> RUB</MenuItem>
          <MenuItem value="SEK"> SEK</MenuItem>
          <MenuItem value="SGD"> SGD</MenuItem>
          <MenuItem value="THB"> THB</MenuItem>
          <MenuItem value="TRY"> TRY</MenuItem>
          <MenuItem value="USD"> USD</MenuItem>
          <MenuItem value="ZAR"> ZAR</MenuItem>
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
          value={currencyTwo.value}
        />
      </div>
    </div>
  );
}
