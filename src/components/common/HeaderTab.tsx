import { Tab, makeStyles } from '@material-ui/core';
import React from 'react';

type HeaderTabProps = {
  label: string;
};

const useStyles = makeStyles(() => {
  return {
    root: {
      textTransform: 'capitalize',
      minWidth: 80,
    },
  };
});

export const HeaderTab: React.VFC<HeaderTabProps> = (props: HeaderTabProps) => {
  const classes = useStyles();

  return <Tab label={props.label} className={classes.root} disableRipple />;
};
