import React, { Component } from 'react';
import Layout from './components/Layout';
import FeedPage from './pages/FeedPage';

class App extends Component {
  render() {
    return (
      <Layout>
        <FeedPage />
      </Layout>
    );
  }
}

export default App;
