import { Button, Typography } from '@mui/material';
import React from 'react';

export const BookingButton: React.VFC = () => {
  return (
    <Button variant="contained" fullWidth>
      <Typography variant="h4" fontWeight="bold">
        予約リクエスト
      </Typography>
    </Button>
  );
};
