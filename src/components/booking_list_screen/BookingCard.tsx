import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

type BookingCardItemProps = {
  imgSrc: string;
  address: string;
  spaceCategory: string;
  name: string;
  facilities: string[];
  rating: number;
  price: number;
  weeks: number;
};

const useStyles = makeStyles(() => {
  return {
    root: {
      maxWidth: 490,
    },
    media: {
      height: 170,
    },
  };
});

export const BookingCard: React.VFC<BookingCardItemProps> = (
  props: BookingCardItemProps
) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={props.imgSrc}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
};
