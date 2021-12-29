import { Map as MapIcon } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

import { getGoogleMapsApiKey } from '../../../config/googleMaps';
import { GeoPoint } from '../../../domain/valueObject/geoPoint';

type MapProps = {
  geoPoint: GeoPoint;
};

const SectionTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const TitleSpacer = styled(Box)(({ theme }) => ({
  width: theme.spacing(0.5),
}));

const MapBox = styled(Box)(() => ({
  width: '100%',
  aspectRatio: '2',
}));

export const Map: React.VFC<MapProps> = (props: MapProps) => {
  const apiKey = getGoogleMapsApiKey();

  return (
    <Box>
      <SectionTitle>
        <MapIcon />
        <TitleSpacer />
        <Typography variant="h4">地図</Typography>
      </SectionTitle>
      <MapBox>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={15}
            center={{
              lat: props.geoPoint.latitude,
              lng: props.geoPoint.longitude,
            }}
          >
            <Marker
              position={{
                lat: props.geoPoint.latitude,
                lng: props.geoPoint.longitude,
              }}
            />
          </GoogleMap>
        </LoadScript>
      </MapBox>
    </Box>
  );
};
