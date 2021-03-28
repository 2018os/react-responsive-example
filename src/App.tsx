import { ThemeProvider } from "styled-components";
import Home from "./Home";

import DefaultSetting from "./utils/DefaultStyle";
import theme from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <DefaultSetting />
    </ThemeProvider>
  );
}

export default App;
