import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

export const Add = () => {
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};
