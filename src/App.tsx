import React from 'react';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';

import Global from './styles/global';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
        <Global />
        <Routes />
    </ThemeProvider>
  )
}

export default App;
