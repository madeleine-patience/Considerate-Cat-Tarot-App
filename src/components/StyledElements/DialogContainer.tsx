import { styled } from "@mui/system";

export const DialogContainer = styled("dialog")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
  backdropFilter: "blur(10px)",
  zIndex: "2",
}));
