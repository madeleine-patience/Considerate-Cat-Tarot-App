import { styled } from "@mui/system";

export const DialogContainer = styled("dialog")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "transparent",
  backdropFilter: "blur(5px)",
  zIndex: "2",
}));
