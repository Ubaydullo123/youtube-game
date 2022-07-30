import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { darkTheme } from "./themes";
import GlobalStyles from "./themes/globalStyles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
