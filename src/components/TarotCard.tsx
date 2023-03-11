interface TarotProps {
  data: {
    id: number;
    cardName: string;
    keyWords: string[];
    imageFileName: string;
    description: string;
    catImage?: string;
  };
}

// woffleloffle: this one should be something like: { data: { cardName: string; keywords: string[]; imageFileName: string; description: string[] } }

function TarotCard(props: TarotProps) {
  return (
    <div className=" bg-orange-200 max-w-[500px] p-4 m-2 rounded-md ">
      <h1 className=" text-4xl">{props.data.cardName}</h1>
      <p className="italic mt-2">{props.data.keyWords.join(", ")}</p>
      <div className="flex pt-2 items-center justify-center ">
        <img
          className="w-[45%] rounded-md shadow-md"
          src={props.data.imageFileName}
        />
        <div className="flex-row m-2">
          <p className=" p-2 ">{props.data.description}</p>
          {props.data.catImage && <p>Cats Present</p>}
          {/* <p className="m-2">{if(props.data.catImage){"Cat Present"}} </p> */}
          <img className="w-[30%] m-2 rounded-md " src={props.data.catImage} />
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
