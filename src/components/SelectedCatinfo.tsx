import catData from "../data/cats";
import ICatProps from "../types/CatProps";
import useDisplayCatInfo from "../hooks/displayCatInfo";
import { v4 as uuidv4 } from "uuid";

function SelectedCat(props: ICatProps) {
  const [showCatInfo, selectedCatId, handleShowCatInfo] = useDisplayCatInfo();
  const buddyLinks = props.data.buddyIds;
  return (
    <div className=" bg-red-200 rounded-lg p-4 ">
      <div className=" p-2  w-[700px] h-[300px] rounded-lg flex justify-center  mx-auto flex-col lg:flex-row ">
        <div className="flex items-center m-8">
          <img
            className=" mh-[350px] w-[350px] rounded-lg items-center "
            src={props.data.image}
          />
        </div>
        <div className="w-[60%]  ml-4">
          <h2 className=" text-4xl pb-4"> {props.data.name}</h2>
          <p className=""> {props.data.description}</p>
        </div>
      </div>
      <div className=" m-8 p-2 flex justify-center">
        <div>
          {props.data.buddyIds && <h3 className="text-center m-2">Buddies</h3>}
          {buddyLinks &&
            buddyLinks.map((buddyNumber) => (
              <img
                key={uuidv4()}
                className="  w-20 rounded-lg"
                src={catData.cats[buddyNumber].image}
              ></img>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SelectedCat;
