import { initializeApp } from 'firebase/app';
import ReactDOM from 'react-dom';
import React from 'react';

import { getFirebaseConfig } from './config/firebase';
import { Provider } from './Provider';

initializeApp(getFirebaseConfig());

ReactDOM.render(<Provider />, document.getElementById('root'));
