import { ThemeProvider } from "styled-components";

import theme from "./theme";
import Box from "./Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box color="#fff" bg="navy">
        Tomato
      </Box>
    </ThemeProvider>
  );
}

export default App;
