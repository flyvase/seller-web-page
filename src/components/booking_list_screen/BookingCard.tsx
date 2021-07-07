import React from 'react';

import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles(() => {
  return {
    root: {
      // height: '100vh',
      marginTop: 64,
      maxWidth: 490,
      maxHeight: 350,
    },
    cardMedia: {
      height: 170,
    },
    rating: {
      display: 'flex',
    },
    cardActions: {
      display: 'flex',
      alignItems: 'center',
      padding: 8,
      justifyContent: 'space-between',
    },
  };
});

export const BookingCard: React.VFC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cardMedia}
        image="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      />
      <CardContent>
        <Typography variant="h5">
          【珈琲物語】ゆったり落ち着ける下町の純喫茶
        </Typography>
        <Typography variant="body1">東京都 足立区</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Box className={classes.rating}>
          <Star color="secondary" />
          <Typography>4.8</Typography>
        </Box>
        <Button size="small" color="primary">
          詳細を見る
        </Button>
      </CardActions>
    </Card>
  );
};
