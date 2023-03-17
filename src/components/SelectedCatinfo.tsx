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
    <div className=" w-[100%] flex items-center  ">
      <div>
        <img className="w-[95%]" src={props.data.image} />
      </div>
      <div className="m-2">
        <h2 className=" text-4xl"> {props.data.name}</h2>
        <p className="mt-2 mb-2"> {props.data.description}</p>
        {props.data.buddyIds && <h3 className="text-xl">Buddies</h3>}
        {buddyLinks &&
          buddyLinks.map((buddyNumber) => (
            <img src={catData.cats[buddyNumber].image}></img>
          ))}
      </div>
    </div>
  );
}

export default SelectedCat;
