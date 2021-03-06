import { environment } from './process';

export function getFirebaseConfig() {
  switch (environment) {
    case 'prod':
      return {
        apiKey: 'AIzaSyBGA2S8brBUQUk5mXpt5wktfTUhvMcQpNE',
        authDomain: 'flyvase-prod.firebaseapp.com',
        projectId: 'flyvase-prod',
        storageBucket: 'flyvase-prod.appspot.com',
        messagingSenderId: '702731706525',
        appId: '1:702731706525:web:0f31cf139d0abeac937474',
      };
    case 'ci':
      return {
        apiKey: 'AIzaSyByNvik2Zm9dSlcwC1yCo7TdgHWe1HI5vo',
        authDomain: 'flyvase-ci.firebaseapp.com',
        projectId: 'flyvase-ci',
        storageBucket: 'flyvase-ci.appspot.com',
        messagingSenderId: '483758341679',
        appId: '1:483758341679:web:3f66bf991bd52cf56f50da',
      };
    default:
      return {
        apiKey: 'AIzaSyARAPo5YFMO2A1nXbzf2byYAdginW-KC1A',
        authDomain: 'flyvase-dev.firebaseapp.com',
        projectId: 'flyvase-dev',
        storageBucket: 'flyvase-dev.appspot.com',
        messagingSenderId: '562369201187',
        appId: '1:562369201187:web:4c1bd1f4a5fb40f6759d96',
        measurementId: 'G-F25VG0R0G4',
      };
  }
}
