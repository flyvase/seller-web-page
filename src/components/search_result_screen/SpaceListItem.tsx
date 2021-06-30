import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { Star } from '@material-ui/icons';

import { Spacer } from '../common/Spacer';

type SpaceListItemProps = {
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
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 16,
    },
    image: {
      width: 300,
      height: 200,
      borderRadius: 16,
    },
    dividerWrapper: {
      paddingTop: 8,
      paddingBottom: 4,
    },
    miniDivider: {
      width: '32px',
      borderTopColor: theme.palette.divider,
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    },
    bottom: {
      display: 'flex',
      alignItems: 'flex-end',
    },
    price: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  };
});

export const SpaceListItem: React.VFC<SpaceListItemProps> = (
  props: SpaceListItemProps
) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={props.imgSrc} className={classes.image} />

      <Box className={classes.content}>
        <Typography variant="caption">
          {props.address}の{props.spaceCategory}
        </Typography>

        <Typography variant="h5">{props.name}</Typography>

        <Box className={classes.dividerWrapper}>
          <Box className={classes.miniDivider} />
        </Box>

        <Typography variant="body2">{props.facilities.join('・')}</Typography>

        <Spacer />

        <Box className={classes.bottom}>
          <Star color="secondary" />

          <Typography>{props.rating}</Typography>

          <Spacer />

          <Box className={classes.price}>
            <Typography variant="subtitle1">¥{props.price} / 週</Typography>
            <Typography variant="caption">
              合計¥{props.price * props.weeks}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
