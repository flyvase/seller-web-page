import React, { ChangeEvent } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Box, TextField } from '@material-ui/core';

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
  inputVariant?: 'filled' | 'outlined' | 'standard';
  onChange: (country: Country | null) => void;
};

export const CountryPicker: React.VFC<CountryPickerProps> = (
  props: CountryPickerProps
) => {
  return (
    <Autocomplete
      autoHighlight
      options={countries as Country[]}
      getOptionLabel={(option) =>
        countryToFlag(option.code) + ' ' + option.label
      }
      renderOption={(option) => (
        <Box>
          <span>{countryToFlag(option.code) + ' '}</span>
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.placeHolder ?? '国を選択してください'}
          variant={props.inputVariant ?? 'outlined'}
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
