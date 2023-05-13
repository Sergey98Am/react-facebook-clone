import { Box, useMediaQuery } from "@mui/material";
import { Feed } from "./components/Feed/Feed";
import { Rightbar } from "./components/Rightbar/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import { useTheme } from "@mui/material/styles";
import { Add } from "./components/CreatePost/Add";

function App() {

  const theme = useTheme();
  const biggerThanSm = useMediaQuery(theme.breakpoints.up('sm'));
  const biggerThanLg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div>
      <Box>
        <Navbar biggerThanLg={biggerThanLg} />
        <Box sx={{ display: 'flex' }}>
          {biggerThanSm && <Sidebar />}
          <Feed />
          {biggerThanLg && <Rightbar />}
        </Box>
        <Add />
      </Box>
    </div>
  );
}

export default App;
