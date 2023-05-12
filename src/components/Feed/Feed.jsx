import { Box } from "@mui/material";
import { Post } from "../Feed/Post";
import Toolbar from '@mui/material/Toolbar';

export const Feed = () => {
  return (
    <Box component="main" p={{xs: 2, xl: 8}} sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
