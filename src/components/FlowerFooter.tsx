import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
const FlowerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignSelf: "flex-end",
  position: "relative",
  overflow: "hidden",
}));
const FlowerImage = styled("img")(({ theme }) => ({
  height: 400,
  zIndex: 2,
}));

const GreenBackground = styled("div")(({ theme }) => ({
  width: "100%",
  height: 300,
  background: "linear-gradient(transparent, #a0b594)",
  position: "absolute",
  bottom: 0,
}));
const GreenOverlay = styled("div")(({ theme }) => ({
  width: 1000,
  height: 300,
  borderRadius: 20,
  background: "rgba(177, 210, 175, 0.8)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 3,
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  padding: 20,

  [theme.breakpoints.down("lg")]: {
    width: 800,
  },
  [theme.breakpoints.down("md")]: {
    width: 600,
  },
  [theme.breakpoints.down("sm")]: {
    width: 300,
    justifyContent: "center",
  },
}));
const ShoeContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  zIndex: 4,
  width: 200,
  height: 200,
  borderRadius: "100%",
  background: "#ebdfbe",
  overflow: "hidden",
  border: "20px solid #d1c3d6",
  top: "50%",
  left: 20,
  transform: "translate(-0%, -50%)",
  [theme.breakpoints.down("sm")]: {
    visibility: "hidden",
  },
}));
const Shoe = styled("img")(({ theme }) => ({
  width: 350,
  position: "absolute",
  left: -2,
  top: 20,
}));
const TextBox = styled("div")(({ theme }) => ({
  width: 600,
  height: 200,
  background: "#9C6E4F",
  borderRadius: 20,
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
  margin: 50,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  [theme.breakpoints.down("lg")]: {
    width: 450,
  },
  [theme.breakpoints.down("md")]: {
    width: 250,
  },
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    width: 250,
    textAlign: "center",
    padding: 5,
  },
}));

const FooterFont = styled("h5")(({ theme }) => ({
  fontSize: 20,
  fontFamily: theme.typography.h1.fontFamily,
  fontWeight: "100",
  padding: "0 30px",
  color: "white",
}));

const InstagramIconStyled = styled(InstagramIcon)(({ theme }) => ({
  color: "white",
  transform: "scale(2)",
}));
const EmailIconStyled = styled(EmailIcon)(({ theme }) => ({
  color: "white",
  transform: "scale(2)",
}));

const FlowerFooter = () => {
  const navigate = useNavigate();

  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <FlowerContainer>
        <GreenBackground />
        <FlowerImage src="/Art/TuliipBed.png" />
        <FlowerImage src="/Art/TuliipBed.png" />
        <FlowerImage src="/Art/TuliipBed.png" />
        <GreenOverlay>
          <div>
            <TextBox>
              <FooterFont>
                Considerate Cat is purrrrrently under construction. Hold onto
                your whiskers while we work our
                <b style={{ color: "yellow" }}>
                  <i> ✨ magic! </i>
                </b>
              </FooterFont>
              <div
                style={{
                  display: "flex",
                  gap: 50,
                }}
              >
                <InstagramIconStyled />
                <EmailIconStyled />
              </div>
            </TextBox>
            <ShoeContainer>
              <Shoe src="/Art/Shoe.png" />
            </ShoeContainer>
          </div>
        </GreenOverlay>
      </FlowerContainer>
    </ThemeProvider>
  );
};

export default FlowerFooter;
