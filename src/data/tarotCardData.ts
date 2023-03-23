import Phaedra from "../images/Cats/Phaedra.jpg";
import MyGal from "../images/Cats/MyGal.jpg";
import BenBen from "../images/Cats/BenBen.jpg";
import Norman from "../images/Cats/Norman.jpg";
import Bibbie from "../images/Cats/Bibbie.jpg";
import Butters from "../images/Cats/Butters.jpg";
import Beamer from "../images/Cats/Beamer.jpg";
import Charis from "../images/Cats/Charis.jpg";
import Chloe from "../images/Cats/Chloe.jpg";
import Crumb from "../images/Cats/Crumb.jpg";
import Doogie from "../images/Cats/Doogie.jpg";
import Eddie from "../images/Cats/Eddie.jpg";
import Finn from "../images/Cats/Finn.jpg";
import Gibbs from "../images/Cats/Gibbs.jpg";
import Gizmo from "../images/Cats/Gizmo.jpg";
import Gracie from "../images/Cats/Gracie.jpg";
import Hank from "../images/Cats/Hank.jpg";
import Heidi from "../images/Cats/Heidi.jpg";
import Jiao from "../images/Cats/Jiao.jpg";
import Lua from "../images/Cats/Lua.jpg";
import Milo from "../images/Cats/Milo.jpg";
import Molly from "../images/Cats/Molly.jpg";
import Mygal from "../images/Cats/Mygal.jpg";
import Mystery from "../images/Cats/Mystery.jpg";
import Rams from "../images/Cats/Rams.jpg";
import Robot from "../images/Cats/Robot.jpg";
import Ruther from "../images/Cats/Ruther.jpg";
import Scrappy from "../images/Cats/Scrappy.jpg";
import Wendy from "../images/Cats/Wendy.jpg";
import Shy from "../images/Cats/Shy.jpg";
import Otitis from "../images/Cats/Otitis.jpg";
import Mustard from "../images/Cats/Mustard.jpg";
import Meg from "../images/Cats/Meg.jpg";
import Charlie from "../images/Cats/Charlie.jpg";
import Daisy from "../images/Cats/Daisy.jpg";
import Gigi from "../images/Cats/Gigi.jpg";
import Alice from "../images/Cats/Alice.jpg";
import Abe from "../images/Cats/Abe.jpg";
import Cricket from "../images/Cats/Cricket.jpg";
// clean this up, use the public folder instead of SRC.

const tarotDeck = {
  tarotDeck: [
    {
      id: 0,
      cardName: "",
      keyWords: [],
      description: "",
      imageFileName: "/artwork/back.jpg",
      suit: "Major",
    },
    {
      id: 1,
      cardName: "The Fool",
      keyWords: ["Autonomy", "Intuition", "Independence", "Innocence"],
      description:
        "The Fool is an indicator of a curiosity and a fresh beginning. You are trusting and this is a trait that people love about you. Its wise to keep your guard up around people looking to take advantage.",
      imageFileName: "/artwork/1.jpg",
      suit: "Major",
    },
    {
      id: 2,
      cardName: "The Magician",
      keyWords: ["Competence", "Empowerment", "Change"],
      description:
        "Your intuition is strong right now. Listen to what you're feeling an dtrust the direction it's sending you.",
      imageFileName: "/artwork/2.jpg",
      suit: "Major",
      catImage: ["/Cats/Mystery.jpg"],
    },
    {
      id: 3,
      cardName: "The High Priestess",
      keyWords: ["Instinct", "Intuition", "Purity"],
      description:
        "You have a powerful intuition. Listen to what you are feeling and have trust you are being led in the right direction.",
      imageFileName: "/artwork/3.jpg",
      suit: "Major",
    },
    {
      id: 4,
      cardName: "The Empress",
      keyWords: ["Fertility", "Maturity", "Encouragement"],
      description:
        "You have the power inside of you to acheive great things, although you need to find the strength to take the first step.",
      imageFileName: "/artwork/4.jpg",
      suit: "Major",
    },
    {
      id: 5,
      cardName: "The Emperor",
      keyWords: ["Authority", "Rules", "Structure"],
      description:
        "Opposite to many cards, this card tells you that you should listen to reason and facts rather than your intuition or gut.",
      imageFileName: "/artwork/5.jpg",
      suit: "Major",
      catImage: ["/Cats/BenBen.jpg", Norman],
    },
    {
      id: 6,
      cardName: "The Hierophant",
      keyWords: ["Teaching", "Intelligence", "Advice Giving"],
      description:
        "This card can represent a teacher or someone who feels strongly about rules and expectations.",
      imageFileName: "/artwork/6.jpg",
      suit: "Major",
      catImage: [MyGal],
    },
    {
      id: 7,
      cardName: "The Lovers",
      keyWords: ["Desire", "Harmony", "Choice"],
      description:
        "Love is free flowing in and you are satisfied socially in your life. You've done a good job allowing the right people into your life.",
      imageFileName: "/artwork/7.jpg",
      suit: "Major",
    },
    {
      id: 8,
      cardName: "The Chariot",
      keyWords: ["Progression", "Triumph", "Success"],
      description:
        "Your hard work is about to pay off in a big way. If you've been wanting to start something now is the time. This card is about progression and completion.",
      imageFileName: "/artwork/8.jpg",
      suit: "Major",
    },
    {
      id: 9,
      cardName: "Strength",
      keyWords: ["Discipline", "Will Power", "Influence"],
      description:
        "You're a strong person and are constantly showing strength in the face of difficult situations.",
      imageFileName: "/artwork/9.jpg",
      suit: "Major",
      catImage: ["/Cats/Butters.jpg"],
    },
    {
      id: 10,
      cardName: "The Hermit",
      keyWords: ["Seclusion", "Practice", "Tranquility", "Withdrawal"],
      description:
        "This card represents solitude and is bringing attention to that. Either a lack of or too much. It is important to spark a balance of solitude in your life.",
      imageFileName: "/artwork/10.jpg",
      suit: "Major",
    },
    {
      id: 11,
      cardName: "Wheel Of Fortune",
      keyWords: ["Luck", "Unpredictability", "Circle Of Life"],
      description:
        "Everything in life is fleeting and will eventually move on. It is good to remember in difficult times that this too shall pass. Enjoy the good and ride out the bad.",
      imageFileName: "/artwork/11.jpg",
      suit: "Major",
      catImage: [Gibbs],
    },
    {
      id: 12,
      cardName: "Justice",
      keyWords: ["Balance", "Law", "Fairness"],
      description:
        "Trust the universe will find a balance and justice will be served appropriately. Big or small; the problems in your life will come to a fair close.",
      imageFileName: "/artwork/12.jpg",
      suit: "Major",
      catImage: [
        "/Cats/BenBen.jpg",
        "/Cats/Butters.jpg",
        "/Cats/Phaedra.jpg",
        "/Cats/Eddie.jpg",
        "/Cats/Chloe.jpg",
        "/Cats/Hank.jpg",
        "/Cats/Scrappy.jpg",
        "/Cats/Beamer.jpg",
      ],
    },
    {
      id: 13,
      cardName: "The Hanged Man",
      keyWords: ["Illumination", "Loss", "Perception", "Setbacks"],
      description:
        "You may be feeling pulled in a few directions or feel that you have many decisions to make. It might be time to walk away completely and start over or take a break to clear your head.",
      imageFileName: "/artwork/13.jpg",
      suit: "Major",
    },
    {
      id: 14,
      cardName: "Death",
      keyWords: ["Decisions", "Parting", "Endings"],
      description:
        "This card is indicitave of things coming to a close. Remember when this card shows itself it is not necessarily a bad omen.Just a natural end.",
      imageFileName: "/artwork/14.jpg",
      suit: "Major",
    },
    {
      id: 15,
      cardName: "Temperance",
      keyWords: ["Balance", "Moderation", "Gratitude"],
      description:
        "This card represents balance. Your have struck a balance in your life that is allowing you to feel peaceful. Show gratitude for this time and the balance will remain.",
      imageFileName: "/artwork/15.jpg",
      catImage: [Phaedra],
      suit: "Major",
    },
    {
      id: 16,
      cardName: "The Devil",
      keyWords: ["Shadow", "Greediness", "Gratitude"],
      description:
        "This card can indicate that you are feeling soffocated or constrained by something in your life. you have the power to break free and walk away if you're feeling limited.",
      imageFileName: "/artwork/16.jpg",
      suit: "Major",
    },
    {
      id: 17,
      cardName: "The Tower",
      keyWords: ["Disaster", "Rebuilding", "Sudden Change"],
      description:
        "Things may not be great right now, but remember that this too shall pass.",
      imageFileName: "/artwork/17.jpg",
      suit: "Major",
    },

    {
      id: 18,
      cardName: "The Star",
      keyWords: ["Optimism ", "Honesty", "Confidence"],
      description:
        "You've come out of something difficult and are turning it around. This is a period of openness for you to believe that good things will happen. Trust that this is a good time and enjoy the moment.",
      imageFileName: "/artwork/18.jpg",
      suit: "Major",
    },
    {
      id: 19,
      cardName: "The Moon",
      keyWords: ["Mystery", "Imagination", "Fantasy"],
      description:
        "It's time to dream and imagine the future. Things are good right now and it's a great time to picture the things you want and reach forward towards them.",
      imageFileName: "/artwork/19.jpg",
      suit: "Major",
    },

    {
      id: 20,
      cardName: "The Sun",
      keyWords: ["Bliss", "Glory", "Kindness"],
      description:
        "This is a happy time. Life is good. Everything is going according to plan.",
      imageFileName: "/artwork/20.jpg",
      suit: "Major",
    },
    {
      id: 21,
      cardName: "Judgement",
      keyWords: ["Evaluation", "Critique", "Restoration"],
      description:
        "You are in a period where you may be evaluating or critiquing something in your life. It is important to look at it from all angles before a final opinion and making decisions.",
      imageFileName: "/artwork/21.jpg",
      suit: "Major",
    },
    {
      id: 22,
      cardName: "The World",
      keyWords: ["Completion", "Integration", "Wholeness"],
      description:
        "You are finally done something that you've spent a lot of time and energy on. This card can indicate the end of something- but ultimately it will lead to new and positive beginnings.",
      imageFileName: "/artwork/22.jpg",
      suit: "Major",
      catImage: [Lua],
    },
    {
      id: 23,
      cardName: "Ace of Cups",
      keyWords: ["Discipline", "Will Power", "Influence"],
      description:
        "You're a strong person and are constantly showing strength in the face of difficult situations.",
      imageFileName: "/artwork/23.jpg",
    },
    {
      id: 24,
      cardName: "Two of Cups",
      keyWords: ["Partnership", "Stability", "Compatibility"],
      description:
        "You are on the same page with many of the important people in your life. Your relationships feel supportive and equal and you're being respected and appreciated in your work life..",
      imageFileName: "/artwork/24.jpg",
      catImage: [Charlie, Daisy],
    },
    {
      id: 25,
      cardName: "Three of Cups",
      keyWords: ["Friendship", "Laughter", "Celebration"],
      description:
        "This is a card of friendship. The people in your life are supportive, caring, kind and loving. There is many events and opportunities to celebrate and your heart will be full from being around family and friends.",
      imageFileName: "/artwork/25.jpg",
    },
    {
      id: 26,
      cardName: "Four of Cups",
      keyWords: ["Retreat", "Feeling Disconnected", "Contemplation"],
      description:
        "This card represents peace and relaxation. This is a good time to meditate, show gratitude and reconnect with yourself.",
      imageFileName: "/artwork/26.jpg",
      catImage: [Jiao],
    },
    {
      id: 27,
      cardName: "Five of Cups",
      keyWords: ["Negativity", "Ungratefulness", "Loss"],
      description:
        "You may be in a headspace where everything is feeling very negative right now. Focus on gratitude and the positives to get yourself out of this funk.",
      imageFileName: "/artwork/27.jpg",
    },
    {
      id: 28,
      cardName: "Six of Cups",
      keyWords: ["Nostalgia", "Compassion", "Happy memories"],
      description:
        "Feelings of childhood and 'the good old days' might be coming up for you lately. Right now is a good time to journal and reflect on the past. Remember that the past is the past and thinking too much about it can pull you away from the present.",
      imageFileName: "/artwork/28.jpg",
      catImage: [Bibbie],
    },
    {
      id: 29,
      cardName: "Seven of Cups",
      keyWords: ["Choices", "Indecision", "Daydreaming"],
      description:
        "You have a choice to make and it may be overwhelming you. There are many options, outcomes and possibilities ahead of you. Visualize what it is that you want and see yourself with each one. Which one feels right?",
      imageFileName: "/artwork/29.jpg",
      catImage: [Cricket],
    },
    {
      id: 30,
      cardName: "Eight of Cups",
      keyWords: ["Walking Away", "Searching For Meaning"],
      description:
        "Have you been working hard at something that doesn't feel right? It may be time to search for something better. This card can clearly indicate that you should walk away temporarily and re-evaluate.",
      imageFileName: "/artwork/30.jpg",
    },
    {
      id: 31,
      cardName: "Nine of Cups",
      keyWords: ["Indulging", "Treating Yourself", "Luxury"],
      description:
        "Nine of cups is all about treating yourself. Something that you've been waiting for will soon come. Your hard work is about to pay off! If you're asking a question, the answer is yes.",
      imageFileName: "/artwork/31.jpg",
    },
    {
      id: 32,
      cardName: "Ten of Cups",
      keyWords: ["Bliss", "Happiness", "Made Dreams"],
      description:
        "Everything is good; ten of cups is one of the happiest cards in the deck. All the parts of life seem to be working out the way you like and you feel content. Enjoy.",
      imageFileName: "/artwork/32.jpg",
    },
    {
      id: 33,
      cardName: "Daughter of Cups",
      keyWords: ["Playfulness", "Mischeif", "Seeking Fun"],
      description:
        "You've gone through a period where you've had to be strict or serious with yourself. It's now time to loosen up a bit; be free and playful. Let others see your fun side.",
      imageFileName: "/artwork/33new.jpg",
      catImage: [Molly],
    },
    {
      id: 34,
      cardName: "Son of Cups",
      keyWords: ["Good News", "Love", "Passion"],
      description:
        "Your life has been filled with posive energy and you're ready to take on any task! If you've been waiting for good news- it's on the way.",
      imageFileName: "/artwork/34new.jpg",
      catImage: [Gizmo],
    },
    {
      id: 35,
      cardName: "Mother of Cups",
      keyWords: ["Wisdom", "Sensitivity", "Maturity"],
      description:
        "Have you been working hard at something that doesn't feel right? It may be time to search for something better. This card can clearly indicate that you should walk away temporarily and re-evaluate.",
      imageFileName: "/artwork/35.jpg",
      catImage: [Charis],
    },
    {
      id: 36,
      cardName: "Father Of Cups",
      keyWords: ["Supportive Male Energy", "Kindness", "Guidance"],
      description:
        "The Father of Cups represents someone who is compassionate, kind, supportive and in touch with his feminine side. This is a supportive card about helping others and receiving help in return.",
      imageFileName: "/artwork/36.jpg",
      catImage: [Milo],
    },
    {
      id: 37,
      cardName: "Ace of Pentacles",
      keyWords: ["Prosperity", "Opportunity", "Adventure"],
      description:
        "This is the start of something new for you and you have the time and resources to see it through. You may be given support and this card can represent that support in the form of money.",
      imageFileName: "/artwork/37.jpg",
    },
    {
      id: 38,
      cardName: "Two of Pentacles",
      keyWords: ["Balance", "Priorities", "Adaptation"],
      description:
        "You're working very hard to keep a balanced lifestyle, whatever that means for you. When this car id pulled, it's an encouragement to say you're succeding at your goal to maintain balance",
      imageFileName: "/artwork/38.jpg",
      catImage: [Chloe, Doogie],
    },
    {
      id: 39,
      cardName: "Three of Pentacles",
      keyWords: ["Completion", "Finished Work", "Satisfaction"],
      description:
        "You are ready to take on a new and creative challenge. you have a new skill at the ready and you're eager to put them to the test. Perhaps you've just finished a course or graduated from a prgoram and your'e excited to put all your hard work into play.",
      imageFileName: "/artwork/39.jpg",
      catImage: ["/Cats/Butters.jpg", "/Cats/Phaedra.jpg"],
    },
    {
      id: 40,
      cardName: "Four of Pentacles",
      keyWords: ["Holding Back", "Conservation", "Safety"],
      description:
        "Are you holding onto something that is no longer serving you? This could be a person, object or even a thought. These things all make us feel safe and comfortable but if you are no longer feeling joy in the presence it's time to let go.",
      imageFileName: "/artwork/40.jpg",
      catImage: [Hank],
    },
    {
      id: 41,
      cardName: "Five of Pentacles",
      keyWords: ["Reaching Out", "Need", "Transition"],
      description:
        "Money troubles might be on the horizon but know that these things are always part of an ebb and flow. Sometimes we have more and sometimes we have less.",
      imageFileName: "/artwork/41.jpg",
      catImage: [Scrappy],
    },
    {
      id: 42,
      cardName: "Six of Pentacles",
      keyWords: ["Charity", "Sharing", "Resources"],
      description:
        "If you've been having money problems, you will soon come out of it. A new job, a hand out or some other sort of monetary compensation may be on the way. Continue to use your money managing skills for now.",
      imageFileName: "/artwork/42.jpg",
      catImage: [Robot],
    },
    {
      id: 43,
      cardName: "Seven of Pentacles",
      keyWords: ["Assessment", "Evaluation", "Rewards"],
      description:
        "You've been patiently waiting for something and the Seven of Pentacles is likely pointing to some sort of financial return. An investment is going to pay off and it will be worth the wait!",
      imageFileName: "/artwork/43.jpg",
    },
    {
      id: 44,
      cardName: "Eight of Pentacles",
      keyWords: ["Knowledge", "Detail", "Skill"],
      description:
        "You're going to be working very hard and if the Eight of Pentacles it is a sign that you are on the right track and your time spent will pay off. This card can also be a sign to start something that will help you work on your skills.",
      imageFileName: "/artwork/44.jpg",
      catImage: ["/Cats/Gigi.jpg"],
    },
    {
      id: 45,
      cardName: "Nine of Pentacles",
      keyWords: ["Luxury", "Material Possession"],
      description:
        "You're ontop of your fiances and if theres something you've wanted to purchase; now is the time to go ahead with it. Its a time to feel hopeful.",
      imageFileName: "/artwork/45.jpg",
    },
    {
      id: 46,
      cardName: "Ten of Pentacles",
      keyWords: ["Abundance", "Wealth", "Success"],
      description:
        "Everything is falling into place for you; especially in your professional or financial life. Don't get swept away though, remain humble and stay true to yourself while enjoying the success.",
      imageFileName: "/artwork/46.jpg",
      catImage: ["/Cats/Crumb.jpg"],
    },
    {
      id: 47,
      cardName: "Daughter of Pentacles",
      keyWords: ["Practicality", "Growth", "Learning"],
      description:
        "You may be in a place where you are seeking knowledge in some way. You've recently become a student again. Maybe you are learning a new craft or picking up a new school. You feel excited and inspired by this new adventure.",
      imageFileName: "/artwork/47.jpg",
    },
    {
      id: 48,
      cardName: "Son of Pentacles",
      keyWords: ["Caution", "Focus", "Sensibility"],
      description:
        "You're going to receive good news about money, but it wont be a life changing amount. Use this towards something sensible.",
      imageFileName: "/artwork/48.jpg",
    },
    {
      id: 49,
      cardName: "Mother of Pentacles",
      keyWords: ["Generosity", "Nesting", "Propserity"],
      description:
        "You may be feeling like you'd like to put roots down and start settling in somewhere. The mother of pentacles is maternal and grounded which can represent the way you're feeling or a person in your life..",
      imageFileName: "/artwork/49.jpg",
    },
    {
      id: 50,
      cardName: "Father of Pentacles",
      keyWords: ["Stability", "Comfort", "Dependability"],
      description:
        "This card represents the comfort and joys of life that can be enjoyed with money. It is a card that warns to keep an eye on finances yet still enjoy the comfort that money can bring.",
      imageFileName: "/artwork/50.jpg",
    },
    {
      id: 51,
      cardName: "Ace of Swords",
      keyWords: ["Logic", "Confrontation", "Choices"],
      description:
        "Ace of swords encourages bravery. You might be holding back on something difficult. You know in your heart what needs to happen, now is the time to commit.",
      imageFileName: "/artwork/51.jpg",
      catImage: [Rams],
    },
    {
      id: 52,
      cardName: "Two of Swords",
      keyWords: ["Denial", "Debate", "Truce"],
      description:
        "The Two of Swords can indicate there is a decision in your life that you'll need to make. Reach out to your parnters and seek help to make this decison.",
      imageFileName: "/artwork/52.jpg",
      catImage: ["/Cats/Alice.jpg", "/Cats/Abe.jpg"],
    },
    {
      id: 53,
      cardName: "Three of Swords",
      keyWords: ["Heartache", "Rejection", "Loneliness"],
      description:
        "You may be going through a betrayal, heartbreak or an embarrassment. Take this time to evaluate what is serving you in your life. Things are inevitably going to get better. ",
      imageFileName: "/artwork/53.jpg",
    },
    {
      id: 54,
      cardName: "Four of Swords",
      keyWords: ["Meditation", "Rest", "Healing"],
      description:
        "Take a break. You need it. To be able to be your best self, you must be able to recharge your batteries.",
      imageFileName: "/artwork/54.jpg",
      catImage: [Finn],
    },
    {
      id: 55,
      cardName: "Five of Swords",
      keyWords: ["Selfishness", "Immaturity", "Self Interest"],
      description:
        "You might feel more on edge lately. Try to navigate what is is that's bothering you and do your best to not take things out on people who mean well. Also be on guard for those who may be untrustworthy.",
      imageFileName: "/artwork/55.jpg",
    },
    {
      id: 56,
      cardName: "Six of Swords",
      keyWords: ["Travelling", "Breaking Free"],
      description:
        "Six of Swords is a card that urges the reader to take a rest. Specifically this card is related to travel and retreat. Could be a good time to think about taking a trip.",
      imageFileName: "/artwork/56.jpg",
      catImage: [Shy],
    },
    {
      id: 57,
      cardName: "Seven of Swords",
      keyWords: ["Disohonesty", "Assumption", "Betrayal"],
      description:
        "The Seven of Swords can be about a betrayal. Someone has or will hurt you. resist the urge to hurt this person back. Walk away and be the bigger person, you will be happy with the decision made to take the high road.",
      imageFileName: "/artwork/57.jpg",
    },
    {
      id: 58,
      cardName: "Eight of Swords",
      keyWords: ["Helplessness", "Restriction", "Suffocation"],
      description:
        "Eight of Swords can point to feeling suffocated and confused. You're feeling a bit lost, stuck or understimulated. As difficult as it may be right now, try to find inspiration and attempt to emerge from this mindset you're in right now.",
      imageFileName: "/artwork/58.jpg",
      catImage: ["/Cats/Butters.jpg"],
    },
    {
      id: 59,
      cardName: "Nine of Swords",
      keyWords: ["Worries", "Fear", "Restlessness"],
      description:
        "This card can represent fear, anxiety and sleep issues. Don't sit in these feelings alone. Reach out to ",
      imageFileName: "/artwork/59.jpg",
    },
    {
      id: 60,
      cardName: "Ten of Swords",
      keyWords: ["Sadness", "Exhaustion", "Anger"],
      description:
        "This card is directing you to be on guard right now. It can indicate someone untrustworthy in your life; be aware of who you trust and confide in.",
      imageFileName: "/artwork/60.jpg",
    },
    {
      id: 61,
      cardName: "Daughter of Swords",
      keyWords: ["Seeking Information", "Learning"],
      description:
        "You might be feeling a lot of emotions right now and although it is tempting to act on them, approaching life this way isn't always well reeived. Feel your feelings but be sure to approach every situation in a mature way. Don't let your emotions control.",
      imageFileName: "/artwork/61.jpg",
    },
    {
      id: 62,
      cardName: "Son of Swords",
      keyWords: ["Intelligence", "Contentment"],
      description:
        "The son of swords is one of my most positive cards you can pull. It speaks to the fact that things are going relatively well for your ight now and there is a positive balance among all things. You feel happy about where things are headed.",
      imageFileName: "/artwork/62.jpg",
      catImage: [Otitis],
    },
    {
      id: 63,
      cardName: "Mother of Swords",
      keyWords: ["Grace", "Skill", "Charm"],
      description:
        "The Mother of Words is level headed, knows what she wants and communicates it clearly. The Mother can tell you to follow your instincts as the are guiding you in the right direction.",
      imageFileName: "/artwork/63.jpg",
      catImage: [Mustard],
    },
    {
      id: 64,
      cardName: "Father of Swords",
      keyWords: ["Stubbornness", "Intelligence", "Knowledge"],
      description:
        "This card can indicate a smart but controlling presence in your life. They mean well but can overstep. It is still appropriate to set boundaries.",
      imageFileName: "/artwork/64.jpg",
    },
    {
      id: 65,
      cardName: "Ace of Wands",
      keyWords: ["Goals", "Opportunity", "Vision"],
      description:
        "Ace of Wands means the start of something big. A big project or new vision of something. It's time to set a goal for yourself and focus in on what you really want.",
      imageFileName: "/artwork/65.jpg",
    },
    {
      id: 66,
      cardName: "Two of Wands",
      keyWords: ["Conflict", "Decision", "Individuality"],
      description:
        "You have a big choice ahead of you and you have all the information to make decision; you just have to set time aside to make it. you also may be feeling the need to multi task right now with everything that is going on. Be careful not to overload yourself.",
      imageFileName: "/artwork/66.jpg",
      catImage: [Meg],
    },
    {
      id: 67,
      cardName: "Three of Wands",
      keyWords: ["Action", "Exploration", "Leadership"],
      description:
        "This is the card you might pull if you need to take a first step towards something. If nothing comes to mind this card encourages the reader to think about trying something new.",
      imageFileName: "/artwork/67.jpg",
    },
    {
      id: 68,
      cardName: "Four of Wands",
      keyWords: ["Celebration", "Teamwork", "Community"],
      description:
        "Celebration! Something good has come to light in your personal circle. This card is all about community. It is time to celebrate with those around you. This card can also encourage the reader to ask their community for support.",
      imageFileName: "/artwork/68.jpg",
    },
    {
      id: 69,
      cardName: "Five of Wands",
      keyWords: ["Disagreement", "Confrontation", "Disruption"],
      description:
        "This card can indicate a smart but controlling presence in your life. They mean well but can overstep. It is still appropriate to set boundaries.",
      imageFileName: "/artwork/69.jpg",
    },
    {
      id: 70,
      cardName: "Six of Wands",
      keyWords: ["Victory", "Acheivement", "Pride"],
      description:
        "You or someone know you will have recently expereinced a victory- enjoy the feeling and bask in the hard work that has finally paid off. This card can also indicate that you need to awknowledge your friends more. ",
      imageFileName: "/artwork/70.jpg",
    },
    {
      id: 71,
      cardName: "Seven of Wands",
      keyWords: ["Aggression", "Bravery", "Determined"],
      description:
        "If there is somoene in your life that is making you feel badly; it's time to stand up to that person. Healthy relationships build eachother up, they don't tear eachother down. If you need to walk away, it will be better in the long run.",
      imageFileName: "/artwork/71.jpg",
    },
    {
      id: 72,
      cardName: "Eight of Wands",
      keyWords: ["Speed", "Change", "Conclusion"],
      description:
        "Eith of wands is about fast movements but also about patience. You might be trying to force something that isn't quite ready yet; you'll need to have patience even if things are moving quickly.",
      imageFileName: "/artwork/72.jpg",
    },
    {
      id: 73,
      cardName: "Nine of Wands",
      keyWords: ["Toughness", "Persistence", "Pessimism"],
      description:
        "You might be feeling overwhelmed by something. Perhaps you've tried and failed at something important to you several times now and you're starting to feel like giving up. Take a break and tyr again. It's not a failur; you just need to approach it from a new angle.",
      imageFileName: "/artwork/73.jpg",
    },
    {
      id: 74,
      cardName: "Ten of Wands",
      keyWords: ["Burdens", "Feeling Overwhelmed", "Exhaustion"],
      description:
        "You  have a lot on your plate and are feeling overwhelmed. You might also feel like these are your responsibilities and you can't share that burden. This is never true, help is always available. Use your circle to lighten your load.",
      imageFileName: "/artwork/74.jpg",
    },
    {
      id: 75,
      cardName: "Daughter of Wands",
      keyWords: ["Enthusiasm", "Confidence", "Excitement"],
      description:
        "You've recently discovered a new passion or have been inpsired to work hard. You're excited and isnpired to be creative and work hard.",
      imageFileName: "/artwork/75.jpg",
      catImage: [Wendy],
    },
    {
      id: 76,
      cardName: "Son of Wands",
      keyWords: ["Boldness", "Passion", "Adventure"],
      description:
        "The son of wands is an adventure card, it's time to dream big and follow those dreams. A young spirited individual might enter your life to inspire you to do extraordinary things. You'll be searching for travel and adventure.",
      imageFileName: "/artwork/76.jpg",
    },
    {
      id: 77,
      cardName: "Mother of Wands",
      keyWords: ["Attraction", "Attention", "Confidence"],
      description:
        "Mother of wands represents fertility and feminine confidence. If this represents a person in your life she is a good and loyal friend and always there for you when you most need her. This card can tell you that you'll need the women in your life in the close future.",
      imageFileName: "/artwork/77.jpg",
    },
    {
      id: 78,
      cardName: "Five of Wands",
      keyWords: ["Career Focus", "Creativity", "Guidance"],
      description:
        "The Father of Wands can indicate an actual person in your life who is career focused, mature and supportive. If one person does not come to mind it could be a general air of support from the men around you.",
      imageFileName: "/artwork/78new.jpg",
      catImage: [Milo],
    },
  ],
};

export default tarotDeck;
