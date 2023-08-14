interface ICatProps {
  data: {
    id: number;
    name: string;
    description: string;
    buddyIds?: number[];
    image: string;
    appearsOnCards: number[];
  };
  stateFromParent?: boolean;
  setterFromParent?: Function;

  handleClick?: (cat: any) => void;
}

export default ICatProps;
