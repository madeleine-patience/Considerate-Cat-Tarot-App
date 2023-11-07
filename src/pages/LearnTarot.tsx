import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import { Box } from "@mui/material";
import PhoneHeaderWithName from "../components/PhoneHeaderWithName";
import Leah from "../images/gTNbt2X2_400x400.jpg";
import Null1 from "../images/nulldog.jpg";
import Null2 from "../images/nullsdog3.jpg";
import Null3 from "../images/Nulsldog2.jpg";

import TextBubble from "../components/TextBubble";
import PriceOfDogWalk from "../components/PriceOfDogWalk";
import InputBar from "../components/InputBar";
export const LearnTarot = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100vh",
          height: "100vh",
          backgroundColor: "pink",
          padding: "20px",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          sx={{
            position: "relative",
            padding: "8px",
            backgroundColor: "#F5F3F7",
            width: "247px",
            height: "505px",
            borderRadius: "30px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              right: "70px",
              backgroundColor: "#F5F3F7",
              width: "129px",
              height: "29px",
              borderBottomLeftRadius: "14px",
              borderBottomRightRadius: "14px",
            }}
          >
            {" "}
          </Box>
          <PhoneHeaderWithName callerName="Leah T Codes" image={Leah} />
          <Box
            height="483px"
            margin="8px"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap="8px"
          >
            <TextBubble
              direction={true}
              textContent="Hey Leah! I heard about you from Madeleines Twitch chat, I heard you are offering dog walking service?"
            />
            <TextBubble textContent="Hey Null! For sure. Can I see a photo of your dog?" />
            <TextBubble
              direction={true}
              textContent="Here You go, isn't he cute? Hope you can give me a discount ;) "
            />
            <Box
              width="100%"
              display="flex"
              justifyContent="flex-end"
              gap="8px"
            >
              <img
                src={Null1}
                width="40px"
                height="40px"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
                }}
              />
              <img
                src={Null2}
                width="40px"
                height="40px"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
                }}
              />
              <img
                src={Null3}
                width="40px"
                height="40px"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                  boxShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
                }}
              />
            </Box>
            <TextBubble textContent="Awe, he's so cute! I'll cut my prices in half for you since we know eachother through Madeleine :) " />
            <PriceOfDogWalk
              service="30 Minute Walk"
              price={50}
            ></PriceOfDogWalk>
            <PriceOfDogWalk
              service="60 Minute Walk"
              price={200}
              mb="8px"
            ></PriceOfDogWalk>
            <InputBar />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
