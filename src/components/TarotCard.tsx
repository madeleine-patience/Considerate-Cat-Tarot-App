interface MyTarotProps {
  data: {
    cardName: string;
    keyWords: string[];
    imageFileName: string;
    description: string;
    catImage?: string[] | undefined;
    suit: string;
  };
}

function TarotCard(props: MyTarotProps) {
  // console.log(
  //   props.data.catImage.map((items) => {
  //     return <img src={items} />;
  //   })
  // );
  return (
    <div className=" bg-orange-200 max-w-[500px] p-4 m-2 rounded-md ">
      <h1 className=" text-4xl">{props.data.cardName}</h1>
      <h2 className="  pt-2">Suit: {props.data.suit} </h2>
      <p className="italic mt-2">Keywords: {props.data.keyWords.join(", ")}</p>
      <div className="flex pt-2 items-center justify-center ">
        <img
          className="w-[45%] rounded-md shadow-md"
          src={props.data.imageFileName}
        />
        <div className="flex-row m-4">
          <p className="#">{props.data.description}</p>
          {props.data.catImage && (
            <p className="mt-4 text-sm">Cats Present: </p>
          )}
          {/* <p className="m-2">{if(props.data.catImage){"Cat Present"}} </p> */}
          <div className="flex">
            {props.data.catImage &&
              props.data.catImage.map((image) => (
                <img className=" w-16 mr-2 rounded-lg" src={image}></img>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TarotCard;
