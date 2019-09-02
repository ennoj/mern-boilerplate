import React from 'react';
import AppNavbar from './components/AppNavbar';
import LinkList from './components/LinkList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <AppNavbar />
      <LinkList />
    </div>
  );
}

export default App;
