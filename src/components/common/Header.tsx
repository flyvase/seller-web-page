import React from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Divider,
  Avatar,
  Box,
} from '@material-ui/core';

import horizontalLogo from '../../assets/logos/horizontal.svg';

import { HeaderTab } from './HeaderTab';
import { Spacer } from './Spacer';

const useStyles = makeStyles(() => {
  return {
    root: {
      backgroundColor: 'white',
      color: 'black',
    },
    logo: {
      height: 64,
    },
    tabs: {
      paddingLeft: 20,
    },
    avatar: {
      paddingRight: 20,
    },
  };
});

export const Header: React.VFC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} variant="outlined" position="fixed">
      <Toolbar disableGutters>
        <img src={horizontalLogo} className={classes.logo} />

        <Divider orientation="vertical" flexItem />

        <Tabs value={false} className={classes.tabs}>
          <HeaderTab label="search" />
          <HeaderTab label="booking" />
          <HeaderTab label="chat" />
          <HeaderTab label="settings" />
        </Tabs>

        <Spacer />

        <Box className={classes.avatar}>
          <Avatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
