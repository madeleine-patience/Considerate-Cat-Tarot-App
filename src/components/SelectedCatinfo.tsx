import catData from "../data/cats";

interface ICatProps {
  data: {
    id: number;
    name: string;
    description: string;
    buddyIds?: number[];
    image: string;
  };
}

function SelectedCat(props: ICatProps) {
  const buddyLinks = props.data.buddyIds;
  return (
    <div>
      <div className="w-[650px] flex justify-center m-4 mx-auto flex-col lg:flex-row ">
        <div className="flex items-center">
          <img
            className=" mh-[350px] w-[350px] rounded-lg items-center "
            src={props.data.image}
          />
        </div>
        <div className="w-[60%]  ml-4">
          <h2 className=" text-4xl pb-4"> {props.data.name}</h2>
          <p className=" pb-4"> {props.data.description}</p>
        </div>
      </div>
      {props.data.buddyIds && <h3 className="">Buddies :</h3>}
      {buddyLinks &&
        buddyLinks.map((buddyNumber) => (
          <img
            className=" w-20 mr-2 rounded-lg"
            src={catData.cats[buddyNumber].image}
          ></img>
        ))}
    </div>
  );
}

export default SelectedCat;
