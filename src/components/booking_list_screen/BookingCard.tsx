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
  Container,
  Grid,
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

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 490,
    },
    media: {
      height: 170,
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  };
});

export const BookingCard: React.VFC<BookingCardItemProps> = (
  props: BookingCardItemProps
) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={props.imgSrc}
              ></CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {props.name}
                </Typography>
                <Typography gutterBottom variant="body1">
                  {props.address}
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container>
                  <Star color="secondary" />
                  <Typography>{props.rating}</Typography>
                  <Button size="small" color="primary">
                    詳細を見る
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
