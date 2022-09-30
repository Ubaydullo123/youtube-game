import React, { createContext, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import {BrowserRouter} from 'react-router-dom'
import { darkTheme, lightTheme } from "./themes";
import GlobalStyles from "./themes/globalStyles";
import AllRoutes from "./routes";
import { getFromStorage, setToStorage } from "./services/storage";

type AppContextType = {
  darkThemeOn: boolean,
  setDarkThemeOn: React.Dispatch<React.SetStateAction<boolean>>,
}

const themeText = getFromStorage('darkThemeOn')

const theme = themeText ? JSON.parse(themeText) : true

export const AppContext = createContext<AppContextType | null>(null)

const App = () => {
  const [darkThemeOn, setDarkThemeOn] = useState(theme || true)

  useEffect(()=>{
    setToStorage('darkThemeOn',(darkThemeOn))
  },[darkThemeOn])

  return (
    <BrowserRouter>
      <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
        <AppContext.Provider value={{
          darkThemeOn,
          setDarkThemeOn
        }}>
          <GlobalStyles />
          <AllRoutes/>
        </AppContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
