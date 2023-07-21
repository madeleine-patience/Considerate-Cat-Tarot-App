interface TarotCardProps {
  id: number;
  cardName: string;
  keyWords: string[];
  imageFileName: string;
  description: string;
  catImage?: string[] | string;
  suit?: string;
}

export default TarotCardProps;
