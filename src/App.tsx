import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import Header from './components/Header'
import Main from "./components/Main";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
