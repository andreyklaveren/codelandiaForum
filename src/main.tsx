import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from "./components/GlobalStyled.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
      <App />
  </React.StrictMode>,
)
