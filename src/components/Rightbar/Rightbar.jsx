import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { RightbarContent } from "./RightbarContent";

const drawerWidth = 350;

export const Rightbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
      anchor="right"
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }} p={2}>
        <RightbarContent />
      </Box>
    </Drawer>
  );
};
