import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      primary: string;
      secondary: string;
      alterative: string;
    };
    title: {
      primary: string;
    };
    background: {
      primary: string;
      secondary: string;
      alterative: string;
    };
    button: {
      primary: {
        color: string;
        background: string;
      };
      secondary: {
        color: string;
        background: string;
      };
      alterative: {
        color: string;
        background: string;
      };
    };
  }
}

export const darkTheme: DefaultTheme = {
  text: {
    primary: "#fff",
    secondary: "#000",
    alterative: "#ED52B0",
  },
  title: {
    primary: "#000",
  },
  background: {
    primary: "#fff",
    secondary: "#37399A",
    alterative: "#ED52B0",
  },
  button: {
    primary: {
      color: "#fff",
      background: "#37399A",
    },
    secondary: {
      color: "#37399A",
      background: "#fff",
    },
    alterative: {
      color: "#fff",
      background: "#ED52B0",
    },
  },
};
