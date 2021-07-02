import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Box,
} from '@material-ui/core';
import { Star } from '@material-ui/icons';

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
    actionArea: {
      display: 'flex',
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
        <Typography gutterBottom variant="body1">
          {props.address}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.actionArea}>
        <Box>
          <Star color="secondary" />
          <Typography>{props.rating}</Typography>
        </Box>
        <Box>
          <Button size="small" color="primary"></Button>
          詳細をみる
        </Box>
      </CardActions>
    </Card>
  );
};
