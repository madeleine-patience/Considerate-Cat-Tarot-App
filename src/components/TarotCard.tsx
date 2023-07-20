import { styled } from "@mui/system";

const StyledTarotCard = styled("img")(({ theme }) => ({
  borderRadius: "20px",
  boxShadow: "10px 10px 5px rgba(0,0,0,0.2)",
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
