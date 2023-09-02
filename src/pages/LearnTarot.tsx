import { useState } from "react";
import Menu from "../components/Menu";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Button from "../components/Button";
import { AccordionInfo } from "../components/Accordion";
import PageContainer from "../components/StyledElements/PageContainer";
import FlowerFooter from "../components/FlowerFooter";
export const LearnTarot = () => {
  const [displayLessons, setDisplayLessons] = useState(false);

  const IllustrativeContentContainer = styled("div")({
    position: "relative",
    width: 600,
    height: 800,
    margin: "auto",
  });
  const IllustrativeContent = styled("div")({
    position: "relative",
  });
  const StyledCat = styled("img")({
    height: 400,
    position: "absolute",
    top: 300,
    left: 20,
  });
  const StyledSpeechBubble = styled("img")({
    height: 400,
    top: 100,
    left: 200,
    position: "absolute",
  });
  const StyledTextBox = styled("p")({
    width: 200,
    top: 200,
    left: 330,
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  });
  const AccordionContainer = styled("div")({
    width: 500,
    height: 800,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    margin: "auto",
  });

  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <PageContainer style={{ background: "lightYellow" }}>
        {!displayLessons && (
          <IllustrativeContentContainer>
            <IllustrativeContent>
              <StyledCat src="./Art/GreyCat.png" />
              <StyledSpeechBubble src="./Art/SpeechBubbleBlue.png" />
              <StyledTextBox>
                Would you like to learn a bit about how to do a tarot reading?
                <Button
                  buttonName={"Yes Purrrrrrlease "}
                  onClick={() => setDisplayLessons(true)}
                />
              </StyledTextBox>
            </IllustrativeContent>
          </IllustrativeContentContainer>
        )}
        {displayLessons && (
          <AccordionContainer>
            <AccordionInfo description={"WIP"} title={"Tarot Suits"} />
            <AccordionInfo description={"WIP"} title={"Number Meanings"} />
            <AccordionInfo description={"WIP"} title={"Spreads"} />
            <AccordionInfo description={"WIP"} title={"Reversed Cards"} />
          </AccordionContainer>
        )}
        <FlowerFooter />
      </PageContainer>
    </ThemeProvider>
  );
};
