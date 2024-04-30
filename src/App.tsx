import React from "react";
import "./App.css";
import RouteView from "@/router/routes";
import { HashRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <RouteView></RouteView>
      </HashRouter>
    </div>
  );
};

export default App;
