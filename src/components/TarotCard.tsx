interface MyTarotProps {
  data: {
    cardName: string;
    keyWords: string[];
    imageFileName: string;
    description: string;
  };
}

// woffleloffle: this one should be something like: { data: { cardName: string; keywords: string[]; imageFileName: string; description: string[] } }

function TarotCard(props: MyTarotProps) {
  return (
    <div className=" bg-orange-200  max-w-[500px] p-4 m-2">
      <h1 className=" text-4xl">{props.data.cardName}</h1>
      <p className="italic mt-2">{props.data.keyWords.join(", ")}</p>
      <div className="flex pt-2 items-center justify-center">
        <img className="w-[45%]" src={props.data.imageFileName} />
        <p className="mt-2 p-2 ">{props.data.description}</p>
      </div>
    </div>
  );
}

export default TarotCard;
