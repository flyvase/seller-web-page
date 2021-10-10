import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';

import { Provider } from './Provider';
import { devConfig } from './config/firebase';

initializeApp(devConfig);

ReactDOM.render(<Provider />, document.getElementById('root'));
