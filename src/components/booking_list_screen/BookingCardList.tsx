import React, { ReactFragment } from 'react';
import { makeStyles, Box } from '@material-ui/core';

import { BookingCard } from './BookingCard';

import { searchResultScreenData } from '../../data/searchResultScreenData';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-between',
    },
    main: {
      marginTop: 32,
      marginLeft: 80,
      marginRight: 80,
      marginBottom: 32,
    },
  };
});

export const BookingCardList: React.VFC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className={classes.main}>
        <Box className={classes.root}>
          {searchResultScreenData.map((data, index) => (
            <Box key={index}>
              <BookingCard
                imgSrc={data.imgSrc}
                address={data.address}
                name={data.name}
                rating={data.rating}
              />
            </Box>
          ))}
        </Box>
      </main>
    </React.Fragment>
  );
};
