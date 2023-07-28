import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";

function SelectedCat(props: ICatProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();
  const buddyLinks = props.data.buddyIds;
  return (
    <div>
      <div>
        <div>
          <img src={props.data.image} />
        </div>
        <div>
          <h2> {props.data.name}</h2>
          <p> {props.data.description}</p>
        </div>
      </div>
      <div>
        <div>
          {props.data.buddyIds && <h3>Buddies</h3>}
          {buddyLinks &&
            buddyLinks.map((buddyNumber) => (
              <img key={uuidv4()} src={catData.cats[buddyNumber].image}></img>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SelectedCat;
