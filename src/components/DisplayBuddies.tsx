import ICatProps from "../types/CatProps";
import { styled } from "@mui/system";

const BuddyImages = styled("img")({
  width: 300,
  height: 300,
  borderRadius: 10,
});
const DisplayBuddies = ({ data }: ICatProps) => {
  return (
    <>
      <BuddyImages src={data.image} />
    </>
  );
};

export default DisplayBuddies;
