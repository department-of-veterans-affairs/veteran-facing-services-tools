import React from 'react';
import Layout from '../../layouts/Layout';

const App = ({ location }) => {
  return (
    <Layout location={location}>
      <div
        id="main-content-coverage"
        className="site-c-content__content docSearch-content"
      >
        <h1>Unit Test Coverage Report</h1>
      </div>
    </Layout>
  );
};

export default App;
