function TarotFront({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick} className="w-[150px] h-10 m-2 cursor-pointer">
      <img className="rounded-md shadow-md" src="/artwork/1.jpg" />
    </div>
  );
}

export default TarotFront;
