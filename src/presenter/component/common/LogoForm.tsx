import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';

import horizontalLogo from '../../../assets/logos/horizontal.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '0px 32px 24px 32px',
    width: 400,
    [theme.breakpoints.up('sm')]: {
      borderWidth: 2,
      borderColor: theme.palette.divider,
      borderStyle: 'solid',
      borderRadius: 24,
    },
  },
  title: {
    paddingBottom: 16,
  },
}));

type LogoFormProps = {
  children: ReactNode;
  title: string;
};

export const LogoForm: React.VFC<LogoFormProps> = (props: LogoFormProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          {props.title}
        </Typography>

        {props.children}
      </Box>
    </Box>
  );
};
