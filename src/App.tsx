import React from 'react';

import Dashboard from './pages/Dashboard';

import Global from './styles/global';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Global />
      <Dashboard />
    </React.Fragment>
  )
}

export default App;
