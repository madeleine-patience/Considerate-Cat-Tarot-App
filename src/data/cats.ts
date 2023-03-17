import Phaedra from "../images/Cats/Phaedra.jpg";
import Butters from "../images/Cats/Butters.jpg";
const catData = {
  cats: [
    {
      id: 0,
      name: "Phaedra",
      description: "Lovely cat, bit mean sometimes if provoked.",
      buddies: "Butters",
      image: Phaedra,
      relevantCards: [15, 39],
    },
    {
      id: 1,
      name: "Butters",
      description: "He is Orange",
      buddies: "Phaedra",
      image: Butters,
      relevantCards: [9, 39],
    },
  ],
};

export default catData;
