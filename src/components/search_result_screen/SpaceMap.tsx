import React from 'react';
import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    mapContainer: {
      height: '100%',
      width: '100%',
    },
  };
});

export const SpaceMap: React.VFC = (props) => {
  const classes = useStyles();

  return (
    <LoadScript googleMapsApiKey="AIzaSyB80FmCCcA4FjAZkx_a8Z--tCg_LcgaCiw">
      <GoogleMap
        center={{ lat: 35.69575, lng: 139.77521 }}
        zoom={16}
        mapContainerClassName={classes.mapContainer}
      />
    </LoadScript>
  );
};
