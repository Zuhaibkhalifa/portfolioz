import React from "react";
//global styles

import GlobalStyle from "./components/globalStyle";

import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
// import WorkDetail from "./pages/WorkDetail";
//ruter

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Nav />
        <Switch>
          <Route exact path="/" element={About}>
            <About />
          </Route>
          <Route path="/OurWork" exact element={OurWork}>
            <OurWork />
          </Route>
          <Route path="/Contact" element={Contact}>
            <Contact />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
