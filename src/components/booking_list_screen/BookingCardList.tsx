import React from 'react';
import { List, Box, makeStyles } from '@material-ui/core';

import { BookingCard } from './BookingCard';

import { searchResultScreenData } from '../../data/searchResultScreenData';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
    },
  };
});

export const BookingCardList: React.VFC = () => {
  const classes = useStyles();

  return (
    <List>
      {searchResultScreenData.map((data, index) => (
        <Box key={index} className={classes.root}>
          <BookingCard
            imgSrc={data.imgSrc}
            address={data.address}
            spaceCategory={data.spaceCategory}
            name={data.name}
            facilities={data.facilities}
            rating={data.rating}
            price={data.price}
            weeks={2}
          />
        </Box>
      ))}
    </List>
  );
};
