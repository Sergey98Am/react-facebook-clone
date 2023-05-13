import Box from "@mui/material/Box";
import styled from "@emotion/styled";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 240, sm: 400 },
  bgcolor: "background.default",
  color: "text.primary",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

export const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
