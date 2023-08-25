interface TarotCardProps {
  id: number;
  cardName: string;
  keyWords?: string[];
  imageFileName: string;
  description: string;
  catImage?: string[];
  suit?: string;
  data?: any; //cheating lul
}

export default TarotCardProps;
