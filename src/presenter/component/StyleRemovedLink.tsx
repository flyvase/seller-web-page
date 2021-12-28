import { styled } from '@mui/material';
import React, { RefAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

const _Link = styled(Link)(() => ({
  textDecoration: 'none',
  color: 'inherit',
}));

export const StyleRemovedLink: React.VFC<
  LinkProps & RefAttributes<HTMLAnchorElement>
> = (props: LinkProps & RefAttributes<HTMLAnchorElement>) => {
  return <_Link {...props} />;
};
