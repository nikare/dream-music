import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import 'purecss';

import { store } from './store';
import { App } from './App';
import './theme';

const Root = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

const rootEl = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootEl).render(Root);
