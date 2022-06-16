import React from "react";
//global styles

import GlobalStyle from "./components/globalStyle";

import About from "./pages/about";
function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <About />
      </div>
    </>
  );
}

export default App;
