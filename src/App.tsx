import React from 'react';
import { ThemeProvider } from 'styled-components';

// components
import Layout from './components/Layout'

// styles
import Global from './styles/global';

// themes
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Layout />
    </ThemeProvider>
  )
}

export default App;
