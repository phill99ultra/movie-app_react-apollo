import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App.component.jsx';
import client from './apollo';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

