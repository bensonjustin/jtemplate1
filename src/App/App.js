import React from 'react';
import { withRouter } from 'react-router';
import Routes from '../Routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default withRouter(App);
