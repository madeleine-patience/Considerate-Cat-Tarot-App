function TarotFront({ onClick }: { onClick: () => void }) {
  return (
    <div onClick={onClick}>
      <img src="/artwork/1.jpg" />
    </div>
  );
}

export default TarotFront;
