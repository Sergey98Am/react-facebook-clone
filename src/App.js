import { Box, Stack, useMediaQuery } from "@mui/material";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "@mui/material/styles";

function App() {

  const theme = useTheme();
  const biggerThanMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div>
      <Box>
        <Navbar biggerThanMobile={biggerThanMobile} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          {biggerThanMobile && <Sidebar />}
          <Feed />
          {biggerThanMobile && <Rightbar />}
        </Stack>
      </Box>
    </div>
  );
}

export default App;
