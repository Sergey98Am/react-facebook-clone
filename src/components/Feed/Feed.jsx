import { Box } from "@mui/material";
import { Post } from "../Feed/Post";
import Toolbar from '@mui/material/Toolbar';

export const Feed = () => {
  return (
    <Box component="main" py={4} px={{xs: 2, xl: 16}} sx={{ flexGrow: 1 }}>
      <Toolbar />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};
