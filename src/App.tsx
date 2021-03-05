import React from 'react';
import { ThemeProvider } from 'styled-components';

// components
import Layout from './components/Layout'

// pages
import Dashboard from './pages/Dashboard'

// styles
import Global from './styles/global';

// themes
import dark from './styles/themes/dark';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  )
}

export default App;
