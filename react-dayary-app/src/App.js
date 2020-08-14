import React, { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Main from "./pages/Main";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import FatalError from "./pages/FatalError";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Main} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
