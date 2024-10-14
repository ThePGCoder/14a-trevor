import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { baseTheme, ChakraProvider, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import '@fontsource/poppins';

const theme = extendTheme(
  
  {
    fonts: {
      heading: "Poppins, sans-serif",
      body: "Poppins, sans-serif",
    },
    colors: {
      primary: baseTheme.colors.blue,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
