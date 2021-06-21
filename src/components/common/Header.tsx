import React from 'react';
import {
  AppBar,
  makeStyles,
  Tabs,
  Toolbar,
  Divider,
  Box,
  Avatar,
} from '@material-ui/core';

import horizontalLogo from '../../assets/logos/horizontal.svg';

import { HeaderTab } from './HeaderTab';
import { Spacer } from './Spacer';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: 'white',
      color: 'black',
    },
    logo: {
      height: 64,
    },
  };
});

export const Header: React.VFC = (props) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} variant="outlined" position="fixed">
      <Toolbar disableGutters>
        <img src={horizontalLogo} className={classes.logo} />
        <Divider orientation="vertical" flexItem />
        <Box width={20} />
        <Tabs value={false}>
          <HeaderTab label="search" />
          <HeaderTab label="booking" />
          <HeaderTab label="chat" />
          <HeaderTab label="settings" />
        </Tabs>
        <Spacer />
        <Avatar />
        <Box width={20} />
      </Toolbar>
    </AppBar>
  );
};
