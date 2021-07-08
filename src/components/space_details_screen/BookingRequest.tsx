import React from 'react';
import { Box, Paper, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    paper: {
      width: '480px',
      height: '600px',
    },
  };
});

export const BookingRequest: React.VFC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h4">予約リクエスト</Typography>
          <Button variant="contained" size="medium" color="primary">
            リクエストを送る
          </Button>
        </Paper>
      </Box>
    </React.Fragment>
  );
};
