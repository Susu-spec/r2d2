import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/bruno-ace";
import "@fontsource/roboto-slab";
import "@fontsource/space-mono";
import App from './App';
import Store from "./context/Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Store>
      <App />
    </Store>
  // </React.StrictMode>
);
