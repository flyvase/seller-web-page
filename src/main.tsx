import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';

import { devConfig } from './config/firebase';
import { Provider } from './Provider';

firebase.initializeApp(devConfig);

ReactDOM.render(<Provider />, document.getElementById('root'));
