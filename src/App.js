import { Box, useMediaQuery } from "@mui/material";
import { Feed } from "./components/Feed/Feed";
import { Rightbar } from "./components/Rightbar/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import { Add } from "./components/CreatePost/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const theme = useTheme();
  const biggerThanSm = useMediaQuery(theme.breakpoints.up("sm"));
  const biggerThanLg = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar biggerThanLg={biggerThanLg} mode={mode} setMode={setMode} />
        <Box sx={{ display: "flex" }}>
          {biggerThanSm && <Sidebar mode={mode} setMode={setMode} />}
          <Feed />
          {biggerThanLg && <Rightbar />}
        </Box>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
