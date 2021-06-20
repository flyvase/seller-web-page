import React from 'react';

import logo from './assets/logos/symbol_only.svg';

export const App: React.VFC = () => {
  return (
    <div>
      Hello world!
      <img src={logo} />
    </div>
  );
};
