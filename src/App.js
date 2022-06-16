import React from "react";
//global styles

import GlobalStyle from "./components/globalStyle";

import About from "./pages/about";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";

//ruter

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/work">
            <OurWork />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
