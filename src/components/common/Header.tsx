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
    logo: {
      height: 64,
    },
  };
});

export const Header: React.VFC = (props) => {
  const classes = useStyles();

  return (
    <AppBar color="transparent" variant="outlined" position="fixed">
      <Toolbar disableGutters>
        <Box px={2}>
          <img src={horizontalLogo} className={classes.logo} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box width={20} />
        <Tabs value={0}>
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
