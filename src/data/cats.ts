import Phaedra from "../images/Cats/Phaedra.jpg";
import Butters from "../images/Cats/Butters.jpg";
import Gigi from "../images/Cats/Gigi.jpg";
import Benben from "../images/Cats/BenBen.jpg";
const catData = {
  cats: [
    {
      id: 0,
      name: "BenBen",
      description:
        "BenBen the cat was once known as the saddest cat on the internet due to his down-turned eyes and worried expression. He was just a day away from being euthanized when he was rescued in April 2016. BenBen had been brought to the Vancouver Animal Emergency and Referral Centre by a BC SPCA officer and required immediate medical attention due to puncture wounds, infected lacerations, a crushed spine, and a damaged ear. Although there were many people interested in adopting him, his medical conditions and need for constant care made him deemed unadoptable. Fortunately, veterinarian technician Sandy Windover stepped in to save BenBen. She works at the Vancouver ER Animal Centre and had met BenBen before. She messaged her partner, Adam, to see if they could bring BenBen home and he agreed. Windover and Adam have since given BenBen a loving home where he's made tremendous progress. He went from barely being able to take a few steps without falling over to being able to run and jump.",
      buddies: "Butters",
      image: Benben,
    },
    {
      id: 1,
      name: "Butters",
      description: "He is Orange",
      buddyIds: [2, 3],
      image: Butters,
    },

    {
      id: 2,
      name: "Gigi",
      description: "Cute.",
      image: Gigi,
    },

    {
      id: 3,
      name: "Phaedra",
      description: "Lovely cat, bit mean sometimes if provoked.",
      buddyIds: [1],
      image: Phaedra,
    },
  ],
};

export default catData;
