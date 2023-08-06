import { styled } from "@mui/system";

type CatButton = {
  image: string;
  catLookup: (arg0: string) => {};
};

const CatImages = styled("img")({
  width: "100px",
  height: "100px",
  overflow: "cover",
  borderRadius: "10px",
});

const CatButton: React.FunctionComponent<CatButton> = (props) => {
  const { image, catLookup } = props;

  return (
    <button
      key={`CatButton-${image}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <CatImages
        onClick={(event) => {
          catLookup(image);
        }}
      ></CatImages>
    </button>
  );
};

export default CatButton;
