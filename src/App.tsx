import React from 'react';

import Routes from './routes';

import { ThemeProvider } from 'styled-components';

import Global from './styles/global';

import { useTheme } from './hooks/theme';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
        <Global />
        <Routes />
    </ThemeProvider>
  )
}

export default App;
