import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { themeLight } from 'utils/theme';
import { ThemeProvider } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={themeLight}>
      <Provider store={store}>
        <BrowserRouter basename="goit-react-hw-07-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
