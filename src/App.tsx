import React from 'react';

// components
import Layout from './components/Layout'

// styles
import Global from './styles/global';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global />
      <Layout />
    </React.Fragment>
  )
}

export default App;
