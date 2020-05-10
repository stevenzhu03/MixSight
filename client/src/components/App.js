import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
