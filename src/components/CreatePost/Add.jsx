import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Fab, Stack } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { style, UserBox } from "./StyledComponents";

export const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
          zIndex: 9999,
        }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
              sx={{ width: 30, height: 30, mt: 2 }}
            ></Avatar>
            <Typography fontWeight={500} variant="span" mt={2}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            sx={{ width: "100%" }}
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width: "100px"}}>
              <DateRangeIcon />
              </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
};
