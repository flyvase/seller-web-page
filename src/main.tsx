import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@material-ui/core';

import { App } from './App';
import { theme } from './theme';

firebase.initializeApp({
  apiKey: 'AIzaSyARAPo5YFMO2A1nXbzf2byYAdginW-KC1A',
  authDomain: 'flyvase-dev.firebaseapp.com',
  projectId: 'flyvase-dev',
  storageBucket: 'flyvase-dev.appspot.com',
  messagingSenderId: '562369201187',
  appId: '1:562369201187:web:4c1bd1f4a5fb40f6759d96',
  measurementId: 'G-F25VG0R0G4',
});

ReactDOM.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </RecoilRoot>,
  document.getElementById('root')
);
