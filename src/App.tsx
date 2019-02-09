import React, { Component } from 'react';
import Layout from './components/Layout';
import InfiniteScrollPage from './features/InfiniteScrollPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <InfiniteScrollPage />
      </Layout>
    );
  }
}

export default App;
