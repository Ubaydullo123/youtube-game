import React from "react";
import { ThemeProvider } from "styled-components";
import {BrowserRouter} from 'react-router-dom'
import { darkTheme } from "./themes";
import GlobalStyles from "./themes/globalStyles";
import AllRoutes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <AllRoutes/>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
