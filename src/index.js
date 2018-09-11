import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './pages/home/index.jsx';
import Thread from './pages/Thread/index.jsx';
import NotFound from './pages/NotFound/index.jsx'

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/threads/:id" component={Thread} />
      <Route exact path="/page-not-found" component={NotFound} />
    </div>
  </BrowserRouter>,
  root
);
