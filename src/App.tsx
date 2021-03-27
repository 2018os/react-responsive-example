import { ThemeProvider } from "styled-components";

import DefaultSetting from "./utils/DefaultStyle";
import theme from "./utils/theme";
import Box from "./styles/Box";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          border: "1px solid black",
        }}
      >
        <Box width={[1, 1 / 2, 1 / 4]} p={4} bg="tomato" />
      </div>
      <DefaultSetting />
    </ThemeProvider>
  );
}

export default App;
