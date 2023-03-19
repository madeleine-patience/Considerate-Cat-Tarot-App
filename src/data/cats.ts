import Phaedra from "../images/Cats/Phaedra.jpg";
import Gigi from "../images/Cats/Gigi.jpg";
import Benben from "../images/Cats/BenBen.jpg";
const catData = {
  cats: [
    {
      id: 0,
      name: "BenBen",
      description:
        "Benben's story is one of true grit and determination. Rescued just in time, he went through several surgeries before finding a loving home. Despite his rough start, Benben's tenacity has inspired many, and he now shares his home with brother Norman and four other cats. Benben's journey serves as a reminder that even when faced with obstacles, we can overcome them and live a fulfilling life with the love and support of family and friends.",
      buddies: "Norman",
      buddyIds: [1],
      image: "/Cats/BenBen.jpg",
    },
    {
      id: 1,
      name: "Norman",
      description:
        "Norman is a true survivor. Rescued from a tough situation, he overcame several health issues and found a forever home with his brother Benben and four other feline siblings. Despite his difficult past, Norman has a heart of gold and brings joy to everyone he meets. His unwavering spirit and positive attitude have inspired many, and he continues to thrive in his loving home. Norman's story is a testament to the resilience of the feline spirit and a reminder that no matter what life throws our way, we can overcome it with determination and love.",
      buddyIds: [0],
      image: "/Cats/Norman.jpg",
    },
    {
      id: 2,
      name: "Butters",
      description: "He is Orange",
      buddyIds: [4],
      image: "/Cats/Butters.jpg",
    },

    {
      id: 3,
      name: "Gigi",
      description:
        "Gigi was a foster cat who lived in a college dorm room, bringing joy and comfort to students. Her affectionate nature and playful antics quickly won over the hearts of everyone she met. Despite being a foster cat, Gigi never lacked for love or attention, and her presence in the dorm room brought a sense of calm and happiness. Thankfully, her stay was short-lived, as she was adopted quickly after entering foster care. Gigi's time in the dorm room was a reminder that even in unexpected places, there is always room for love and companionship.",
      image: "/Cats/Gigi.jpg",
    },

    {
      id: 4,
      name: "Phaedra",
      description:
        "Phaedra, a rescued cat from Vokra, was once known for her wicked behavior. However, her life took a turn for the better when she was introduced to her adopted brother Butters. The two cats formed a bond and soon became inseparable. With Butters by her side, Phaedra's demeanor transformed from malicious to kind, and she finally found the love and companionship she had been missing. The two were adopted together and now look after their human baby brother.",
      buddyIds: [2],
      image: "/Cats/Phaedra.jpg",
    },
    {
      id: 5,
      name: "Crumb",
      description:
        "Crumb was a mischievous feline who loved to play pranks on his family. He would hide their socks, steal food from their plates, and even turn off the TV during important moments of their favorite shows. Despite his naughty behavior, his family couldn't help but adore him for his playful and entertaining antics. One day, he even managed to sneak into the neighbor's house and came back with a stolen sock. Crumb's curious and adventurous spirit always kept his family on their toes, and they loved him all the more for it.",
      image: "/Cats/Crumb.jpg",
    },
  ],
};

export default catData;
