import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import ThemeProvider from "./context/ThemeProvider";

import store from "./store/store";
import {REPO_NAME} from "./constants/repo";

import App from './containers/App';

import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
