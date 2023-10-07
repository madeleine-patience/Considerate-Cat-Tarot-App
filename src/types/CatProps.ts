interface ICatProps {
  data: {
    id: number;
    name: string;
    description: string;
    buddyIds?: number[];
    image: string;
    appearsOnCards: number[];
  };
  displayName?: boolean;
  style?: any;
  imageSize?: number;
  setterFromParent?: Function;

  handleClick?: (cat: any) => void;
}

export default ICatProps;
