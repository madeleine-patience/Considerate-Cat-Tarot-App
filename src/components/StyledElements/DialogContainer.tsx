import { styled } from "@mui/system";

export const DialogContainer = styled("dialog")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  width: "100%",
  height: "100%",
  backgroundColor: "#333333bb",
  backdropFilter: "blur(5px)",
  animation: "DialogContainerBlurIn 210ms",
  zIndex: "2",
  "@keyframes DialogContainerBlurIn": {
    "from": {
      backdropFilter: "blur(0px)",
    },
    "to": {
      backdropFilter: "blur(5px)",
    }
  }
}));
