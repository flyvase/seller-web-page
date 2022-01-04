import { Button, Typography } from '@mui/material';
import React from 'react';

import { useGetEmail } from '../../controller/authController';

type BookingButtonProps = {
  spaceHeadline: string;
};

export const BookingButton: React.VFC<BookingButtonProps> = (
  props: BookingButtonProps
) => {
  const email = useGetEmail();

  function navigateToRequestForm() {
    const url = new URL(
      'https://docs.google.com/forms/d/e/1FAIpQLSduokMMhK2fW5I9NqrmFEavAZ7L4zHZ-k6mVwdD7UB3bLWo2A/viewform?usp=pp_url'
    );
    url.searchParams.append('entry.1681395734', email!);
    url.searchParams.append('entry.1182707361', props.spaceHeadline);
    window.open(url, '_blank', 'noreferrer noopener');
  }

  return (
    <Button variant="contained" fullWidth onClick={navigateToRequestForm}>
      <Typography variant="h4" fontWeight="bold">
        予約リクエスト
      </Typography>
    </Button>
  );
};
