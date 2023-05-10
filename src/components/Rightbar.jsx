import { Box } from "@mui/material";
import React from "react";

export const Rightbar = () => {

  console.log('Rightbar');

  return (
    <Box
      flex={2}
      p={2}
    >
      <Box position="fixed">
        Hello
      </Box>
    </Box>
  );
};
