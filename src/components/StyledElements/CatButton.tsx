import { styled } from "@mui/system";
import { v4 as uuidv4 } from "uuid";

const CatImages = styled("img")({
    width: "100px",
    height: "100px",
    overflow: "cover",
    borderRadius: "10px",
  });
  

const CatButton = ({image, catLookup}) => {
    return (
    <button 
    key={`CatButton-${image}`}
    style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover"
        }}>
        <CatImages
          onClick={(event) => {
            catLookup(image);
          }}
        ></CatImages>
      </button>
    )
}

export default CatButton