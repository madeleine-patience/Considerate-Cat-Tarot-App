function TarotFront({
  imageSrc,
  onClick,
}: {
  imageSrc: string;
  onClick: () => void;
}) {
  return (
    <div onClick={onClick} className="w-[200px] m-2">
      <img className="rounded-md shadow-md" src={imageSrc} />
    </div>
  );
}

export default TarotFront;
