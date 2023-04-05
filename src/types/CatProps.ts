interface ICatProps {
  data: {
    id: number;
    name: string;
    description: string;
    buddyIds?: number[];
    image: string;
  };
  handleClick: (cat: any) => void;
}

export default ICatProps;
