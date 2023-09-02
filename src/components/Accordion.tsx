import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionDetails } from "@mui/material";
import { styled } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const StyledAccordion = styled(Accordion)({ width: 600 });

interface AccordionProps {
  title: string;
  description: string;
  color?: string;
}

export const AccordionInfo = ({
  title,
  description,
  color,
}: AccordionProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledAccordion style={{ margin: 0, background: color }}>
        <AccordionSummary>{title}</AccordionSummary>
        <AccordionDetails>{description}</AccordionDetails>
      </StyledAccordion>
    </ThemeProvider>
  );
};
