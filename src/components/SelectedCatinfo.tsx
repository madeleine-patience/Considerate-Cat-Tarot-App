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
    <div className=" bg-red-200 rounded-lg p-4 ">
      <div className=" p-2  w-[720px] h-[300px] rounded-lg flex justify-center  mx-auto flex-col lg:flex-row ">
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
