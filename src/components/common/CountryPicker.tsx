import React, { ChangeEvent } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { makeStyles, TextField } from '@material-ui/core';

import { countries, Country } from '../../config/country';

function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

type CountryPickerProps = {
  placeHolder?: string;
  onChange: (country: Country | null) => void;
};

const useStyles = makeStyles(() => {
  return {
    paper: {
      minWidth: 280,
    },
  };
});

export const CountryPicker: React.VFC<CountryPickerProps> = (
  props: CountryPickerProps
) => {
  const { placeHolder = '国' } = props;
  const classes = useStyles();

  return (
    <Autocomplete
      autoHighlight
      disableClearable
      options={countries as Country[]}
      classes={{ paper: classes.paper }}
      getOptionLabel={(option) => countryToFlag(option.code)}
      renderOption={(option) =>
        `${countryToFlag(option.code)} ${option.label} (+${option.phone})`
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={placeHolder}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
      onChange={(
        event: ChangeEvent<Record<string, unknown>>,
        newValue: Country | null
      ) => {
        props.onChange(newValue);
      }}
    />
  );
};
