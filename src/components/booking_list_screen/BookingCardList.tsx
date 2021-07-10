import React, { ReactFragment } from 'react';
import { makeStyles, Box } from '@material-ui/core';

import { BookingCard } from './BookingCard';

import { searchResultScreenData } from '../../data/searchResultScreenData';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    card: {
      paddingRight: 32,
      paddingLeft: 32,
    },
  };
});

export const BookingCardList: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.root}>
        {searchResultScreenData.map((data, index) => (
          <Box key={index} className={classes.card}>
            <BookingCard
              imgSrc={data.imgSrc}
              address={data.address}
              name={data.name}
              rating={data.rating}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
