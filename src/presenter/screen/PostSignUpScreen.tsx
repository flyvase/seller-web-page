import { Typography } from '@material-ui/core';
import React from 'react';

import { LogoForm } from '../component/common/LogoForm';

export const PostSignUpScreen: React.VFC = () => {
  return (
    <LogoForm title="登録ありがとうございます">
      <Typography align="center">管理者からの連絡をお待ち下さい</Typography>
    </LogoForm>
  );
};