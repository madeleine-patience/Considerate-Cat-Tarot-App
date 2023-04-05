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
      appearsOnCards: [5,12]

    },
    {
      id: 1,
      name: "Norman",
      description:
        "Norman is a true survivor. Rescued from a tough situation, he overcame several health issues and found a forever home with his brother Benben and four other feline siblings. Despite his difficult past, Norman has a heart of gold and brings joy to everyone he meets. His unwavering spirit and positive attitude have inspired many, and he continues to thrive in his loving home. Norman's story is a testament to the resilience of the feline spirit and a reminder that no matter what life throws our way, we can overcome it with determination and love.",
      buddyIds: [0],
      image: "/Cats/Norman.jpg",
      appearsOnCards: [5]

    },
    {
      id: 2,
      name: "Butters",
      description:
        "Butters' journey started in Northern Canada, where he was rescued with a severe tail injury. When his family first took him in, he was a bit of a tough nut to crack - his mean and moody attitude often left them feeling a little intimidated. However, Butters' life changed for the better when he was introduced to his sister cat, Phaedra. The two became inseparable and brought out the best in each other. Eventually, they were adopted together and now share their loving home with a little baby brother. Butters' transformation from a moody cat to a loving and affectionate one is a true testament to the power of love and companionship.",
      buddyIds: [4],
      image: "/Cats/Butters.jpg",
      appearsOnCards: [9,58,12]

    },

    {
      id: 3,
      name: "Gigi",
      description:
        "Gigi was a foster cat who lived in a college dorm room, bringing joy and comfort to students. Her affectionate nature and playful antics quickly won over the hearts of everyone she met. Despite being a foster cat, Gigi never lacked for love or attention, and her presence in the dorm room brought a sense of calm and happiness. Thankfully, her stay was short-lived, as she was adopted quickly after entering foster care. Gigi's time in the dorm room was a reminder that even in unexpected places, there is always room for love and companionship.",
      image: "/Cats/Gigi.jpg",
      appearsOnCards: [44]

    },

    {
      id: 4,
      name: "Phaedra",
      description:
        "Phaedra, a rescued cat from Vokra, was once known for her wicked behavior. However, her life took a turn for the better when she was introduced to her adopted brother Butters. The two cats formed a bond and soon became inseparable. With Butters by her side, Phaedra's demeanor transformed from malicious to kind, and she finally found the love and companionship she had been missing. The two were adopted together and now look after their human baby brother.",
      buddyIds: [2],
      image: "/Cats/Phaedra.jpg",
      appearsOnCards: [12,15,39]

    },
    {
      id: 5,
      name: "Crumb",
      description:
        "Crumb was a mischievous feline who loved to play pranks on his family. He would hide their socks, steal food from their plates, and even turn off the TV during important moments of their favorite shows. Despite his naughty behavior, his family couldn't help but adore him for his playful and entertaining antics. One day, he even managed to sneak into the neighbor's house and came back with a stolen sock. Crumb's curious and adventurous spirit always kept his family on their toes, and they loved him all the more for it.",
      image: "/Cats/Crumb.jpg",
      appearsOnCards: [46]

    },
    {
      id: 6,
      name: "Abe",
      description:
        "Abe was one of four adorable kittens, along with his siblings Daniel, June, and Alice. He stood out with his cute head tilt, which only added to his charm. Abe was a playful and energetic kitten, and it was no surprise when he was adopted along with his sister Alice. Now, they share their loving home with a new baby human brother.",
      buddyIds: [7],
      image: "/Cats/Abe.jpg",
      appearsOnCards: [52]

    },
    {
      id: 7,
      name: "Alice",
      description:
        "Alice was a beautiful black kitten with fur so shiny that it almost looked like silk. Her unique coat made her stand out from the rest of her litter. Despite her striking appearance, Alice was a gentle and affectionate kitten. She was adopted alongside her playful brother Abe, and together they brought love and joy to their new home. Now, they share their home with a new baby human brother, whom Alice loves to snuggle with.",
      buddyIds: [6],
      image: "/Cats/Alice.jpg",
      appearsOnCards: [52]

    },
    {
      id: 8,
      name: "My Gal",
      description:
        "My Gal holds a special place in my heart as she was my very first cat. I can still remember the day we brought her home, I believe I was in grade 1. As we were looking at kittens, she chose me by curling up in my lap and falling asleep. From that moment on, she was a beloved member of our family for 20 years. Despite having a bit of a mean streak, we loved her unconditionally.",
      image: "/Cats/Mygal.jpg",
      appearsOnCards: [6]

    },
    {
      id: 9,
      name: "Gracie",
      description:
        "Gracie was a cat with a very adventurous side. She loved to go on car rides, explore areas on her leash and befriend all the dogs in the neighbourhood. She was deaf due to lymphoma but that did not slow her down. She lived a full life up until 2017 when she passed on.",
      image: "/Cats/Gracie.jpg",
      appearsOnCards: [8]
    },
    {
      id: 10,
      name: "Gibbs",
      description:
        "Gibbs was able to secure a spot on the deck by winning a contest I ran during the considerate cat tarot kickstarter. I was so happy when the person who won fit right in. Gibbs is a rescue cat that was saved and now lives happyily with his family. Welcome to the deck, Gibbs!",
      image: "/Cats/Gibbs.jpg",
      appearsOnCards: [11]

    },
    {
      id: 11,
      name: "Milo",
      description:
        "Milo cam into VOKRA in the summer of 2017 after being surrendered by hsi family after 15 years together. All the volunteers came together to be with Milo but he was still sad to be away from his family. We took turns hanging out in his room, we played with him and brushed him. He sadly passed away under the care of VOKRA in late summer surrounded by the people that rescued him.",
      image: "/Cats/Milo.jpg",
      appearsOnCards: [78],
      instagramHandle:"https://www.instagram.com/vokra/?hl=en"

    },
    {
      id: 12,
      name: "Eddie",
      description:
        "Before Eddie found his forever family, he had three different foster HTMLProgressElement. He lost is hears and his ability to hear. A nice family came along and adopted him despite all his ailments and he lives a full rest of his life indoors and loved by his family. Eddit passed away in January 2018",
      image: "/Cats/Eddie.jpg",
      appearsOnCards: [12,36],
      instagramHandle:"https://www.instagram.com/eddie_the_lilac_lion/"

    },
    {
      id: 13,
      name: "Charlie",
      description:
        "Charlie is Vokras golden boy. Charlie had been at VOKRA for longer than I had been a volunteer there. He was king of the shelter with his own room and an army of fans. Charlie passed away after a long battle with cancer in 2018, surrounded by VOKRA volunteers.",
      image: "/Cats/Eddie.jpg",
      appearsOnCards: [12],
      instagramHandle:"https://www.instagram.com/vokra/?hl=en"

    },
    {
      id: 14,
      name: "Chloe",
      description:
        "Chloe was paralzyed from the waist down due to a supsected tail pull. She requires a great deal of care to help her go to the washroom and other tasks. It doesn't slow here down though, she is living a full life in San Francisco with her brother Doogie and new human siblings.",
      image: "/Cats/Chloe.jpg",
      appearsOnCards: [38],
      buddyIds: [15],
      instagramHandle:"https://www.instagram.com/_gochloego_/"

    },
    {
      id: 15,
      name: "Doogie",
      description:
        "Chloe was paralzyed from the waist down due to a supsected tail pull. She requires a great deal of care to help her go to the washroom and other tasks. It doesn't slow here down though, she is living a full life in San Francisco with her brother Doogie and new human siblings.",
      image: "/Cats/Doogie.jpg",
      buddyIds: [14],
      appearsOnCards: [38],
      instagramHandle:"https://www.instagram.com/_gochloego_/"

    },
    {
      id: 16,
      name: "Scrappy",
      description:
        "Scrappy was born a pure black kitten but slowly started to turn white later in lfe. His family and the many vets that he visited finally decided that he had a rare for of vitilago- a skin condition that causes no pain but will change the pigment of the skin and fur. Scrappy went super viral on the internet and was loved by his family and many until he passed away peacefully at 20 years old.",
      image: "/Cats/Scrappy.jpg",
      appearsOnCards: [41,12],
      instagramHandle:"https://www.instagram.com/seniorscrappy/?hl=en"

    },
    {
      id: 17,
      name: "Beamer",
      description:
        "Beamer is a VOKRA alumni who was adopted in 2017 by his foster mum. Beamer is blind and deaf but with the support of his family has navigated his new home with eas and fits in with his  many brother and sister kitties.",
      image: "/Cats/Beamer.jpg",
      appearsOnCards: [12],
    

    },
    {
      id: 18,
      name: "Hank",
      description:
        "Hank was rescued from a hoarding situation by his current forever family. Hank is blind and deaf but still enjoys things like walking on his harness, playing with his toy mice and napping in the sun.",
      image: "/Cats/Hank.jpg",
      appearsOnCards: [12],
    

    },
    {
      id: 19,
      name: "Lua",
      description:
        "Lua was a paralyzed at a young age but still lives life to the fullest on Gabriola Island in B.C. Canada. Lua loves watching mice, sunbathing and spending time with her family. She also has her own book written about her life called 'The Book of Lua'",
      image: "/Cats/Lua.jpg",
      appearsOnCards: [21],
    

    },
    {
      id: 20,
      name: "Charlie",
      description:
        "Charlie is a rescue from Penticton B.C. who now resides with her sister Daisy on Vancouver Island. She loves nothing more than going for walks in the garden, chasing bees and waging war on the other orange cats in the neighbourhood.",
      image: "/Cats/Charlie.jpg",
      buddyIds: [21],
      appearsOnCards: [24],
    

    },
    {
      id: 21,
      name: "Daisy",
      description:
        "Daisy is a rescue from Penticton BC but now resides on Vancouver island with her Sister Charlie. Her favorite thing to do is go to bed and sleep. Inbetween naps you can find her in the garden eating grass and lazily watching the birds but having no interest to try and catch one.",
      image: "/Cats/Daisy.jpg",
      buddyIds: [20],
      appearsOnCards: [24],
    

    },
    {
      id: 22,
      name: "Jiao",
      description:
        "Jiao means dumpling in Chinese which is a perfect name for this little boy who was rescued from China and brought home to Canada. Jiao's forever family was teaching in China and brought him back when their stay was over. Fun fact, Jiao once survived a four story jump out of a boarding school window.",
      image: "/Cats/Jiao.jpg",
      appearsOnCards: [25],
    

    },

    {
      id: 23,
      name: "Elmer",
      description:
        "Elmer was found in the forest by a group of kind rescuers one freezing october night. He was scared and freezing but quickly turned into his sweet and playful self. We buddied him up with his sister Cole and the two were quickly adopted by a sweet family with two little boys. They are happy, healthy and have their paws full being full time big siblings.",
      image: "/Cats/Elmer.jpg",
      buddyIds: [24],
      appearsOnCards: [23],
    

    },
    {
      id: 24,
      name: "Cole",
      description:
        "Cole was brought into VOKRA and immediatlely put into isolation due to a nasty bug. After three days of healing with her foster mom she was introduced to her buddy; Elmer! The two became immediate best friends and were quickly adopted by a family with two little boys.",
      image: "/Cats/Cole.jpg",
      buddyIds: [23],
      appearsOnCards: [23],
    

    },


  ],

};

export default catData;
