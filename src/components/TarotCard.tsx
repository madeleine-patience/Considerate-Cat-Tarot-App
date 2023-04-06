function TarotFront({
  imageSrc,
  onClick,
}: {
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="w-[150px] h-10 m-2 cursor-pointer">
      <img className="rounded-md shadow-md" src={imageSrc} />
    </div>
  );
}

export default TarotFront;
