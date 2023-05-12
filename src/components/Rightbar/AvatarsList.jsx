import React from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import { users } from "../../data/usersData";

export const AvatarsList = () => {
  return (
    <Box>
      <Typography variant="h6" fontWeight={100}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
        {users.map((item) => (
          <Avatar alt={item.alternativeText} src={item.source} />
        ))}
      </AvatarGroup>
    </Box>
  );
};
