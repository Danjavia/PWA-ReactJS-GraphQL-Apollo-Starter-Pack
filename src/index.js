/**
 * External Resources
 **/
import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, browserHistory } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * Internal Resources
 **/
import Routes from './routes/routes';

import './index.css';

/**
 * `client`: Set apollo client connection
 **/
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: process.env.REACT_APP_GRAPHQL_ENDPOINT }),
});

/**
 * `Render`: Render application
 **/
ReactDOM.render(
  <ApolloProvider client={client}>
    <MuiThemeProvider>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
