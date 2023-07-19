import { styled } from "@mui/system";

const StyledTarotCard = styled("img")(({ theme }) => ({
  borderRadius: "20px",
}));

function TarotFront({
  imageSrc,
  onClick,
}: {
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="#">
      <StyledTarotCard src={imageSrc} />
    </div>
  );
}

export default TarotFront;
