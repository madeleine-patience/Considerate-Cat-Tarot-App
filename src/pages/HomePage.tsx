import "@fontsource/merriweather";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import ElmerHomeAnimation from "../components/ElmerHomeAnimation";
import { keyframes } from "@emotion/react";
import Elmer1 from "/Animations/ElmerAnimation/Elmer1.png";
import Elmer2 from "/Animations/ElmerAnimation/Elmer2.png";
import Elmer3 from "/Animations/ElmerAnimation/Elmer3.png";
import Elmer4 from "/Animations/ElmerAnimation/Elmer4.png";
import Elmer5 from "/Animations/ElmerAnimation/Elmer5.png";
import Elmer6 from "/Animations/ElmerAnimation/Elmer6.png";
import Elmer7 from "/Animations/ElmerAnimation/Elmer7.png";
import Elmer8 from "/Animations/ElmerAnimation/Elmer8.png";
import Elmer9 from "/Animations/ElmerAnimation/Elmer9.png";
import Elmer10 from "/Animations/ElmerAnimation/Elmer10.png";
import Elmer11 from "/Animations/ElmerAnimation/Elmer11.png";
import Button from "../components/Button";
import { LandingPage } from "./LandingPage";
import { useNavigate } from "react-router-dom";

const elmerAnimated = keyframes`
0%{background-image:url(${Elmer1})};
10%{background-image:url(${Elmer2})};
20%{background-image:url(${Elmer3})};
30%{background-image:url(${Elmer4})};
40%{background-image:url(${Elmer5})};
50%{background-image:url(${Elmer6})};
60%{background-image:url(${Elmer7})};
70%{background-image:url(${Elmer8})};
80%{background-image:url(${Elmer9})};
90%{background-image:url(${Elmer10})};
100%{background-image:url(${Elmer11})};
`;
const PageContainer = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  padding: 100,
  display: "flex",
  justifyContent: "center",
}));

const ContainerWithElmer = styled("div")({
  backgroundImage: `url(${Elmer11})`,
  animationName: elmerAnimated,
  animationDuration: "1.5s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationPlayState: "paused",
  background: "#e8d9b7",
  backgroundSize: "cover",
  height: 700,
  width: 500,
  border: "5px double white",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    animationPlayState: "running",
  },
});

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <PageContainer
        style={{
          background: "#c8dec1",
        }}
      >
        <ContainerWithElmer>
          <>
            <Button
              buttonName="Enter"
              onClick={() => {
                navigate("/LandingPage");
              }}
              style={{ position: "absolute", top: "650px" }}
            />
          </>
        </ContainerWithElmer>
      </PageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
