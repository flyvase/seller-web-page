import { List, Divider, Box } from '@material-ui/core';
import React from 'react';

import { SpaceListItem } from './SpaceListItem';

import { searchResultScreenData } from '../../data/searchResultScreenData';

export const SpaceList: React.VFC = (props) => {
  return (
    <List>
      {searchResultScreenData.map((data, index) => (
        <Box key={index}>
          <SpaceListItem
            imgSrc={data.imgSrc}
            address={data.address}
            spaceCategory={data.spaceCategory}
            name={data.name}
            facilities={data.facilities}
            rating={data.rating}
            price={data.price}
            weeks={2}
          />
          <Box py={3}>
            <Divider component="li" />
          </Box>
        </Box>
      ))}
    </List>
  );
};
