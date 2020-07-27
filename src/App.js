import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import history from './routes/history';
import './config/reactotron';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyle />
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
