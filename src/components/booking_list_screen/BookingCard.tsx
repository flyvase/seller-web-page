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

type BookingCardProps = {
  imgSrc: string;
  address: string;
  name: string;
  rating: number;
};

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingTop: 32,
      paddingBottom: 32,
    },
    card: {
      borderRadius: '24px',
      width: 490,
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

export const BookingCard: React.VFC<BookingCardProps> = (
  props: BookingCardProps
) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={props.imgSrc} />
        <CardContent>
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="body1">{props.address}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Box className={classes.rating}>
            <Star color="secondary" />
            <Typography>{props.rating}</Typography>
          </Box>
          <Button size="small" color="primary">
            詳細を見る
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
