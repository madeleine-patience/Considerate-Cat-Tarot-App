interface TarotCard {
  id: number;
  cardName: string;
  keyWords: string[];
  imageFileName: string;
  description: string;
  catImage?: string[];
  suit?: string;
}

export default TarotCard;
