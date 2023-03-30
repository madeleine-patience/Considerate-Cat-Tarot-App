interface ICatProps {
  data: {
    id: number;
    name: string;
    description: string;
    buddyIds?: number[];
    image: string;
  };
}

export default ICatProps;
