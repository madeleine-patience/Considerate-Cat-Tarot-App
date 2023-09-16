import { styled } from "@mui/system";

type CatButton = {
  image: string;
  catLookup: (arg0: string) => void;
  width: number;
};

const CatImages = styled("img")({
  width: "100px",
  height: "100px",
  overflow: "cover",
});

const CatButton: React.FunctionComponent<CatButton> = (props) => {
  const { image, catLookup, width } = props;

  return (
    <button
      key={`CatButton-${image}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: width,
        width: width,
        border: "0px",
        cursor: "pointer",
        borderRadius: 10,
        boxShadow:
          " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
      onClick={(event) => {
        catLookup(image);
      }}
    ></button>
  );
};

export default CatButton;
