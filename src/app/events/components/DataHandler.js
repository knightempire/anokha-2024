const DataHandler = async () => {
  // try {
  //   // need to change to server api endpoint (used json-server to create a temp server)
  //   const response = await fetch("http://localhost:3001/events/");
  //   const data = await response.json();
  //   console.log("Data:", data);

  //   return data;
  // } catch (err) {
  //   console.error("Error getting Event Data:", err);
  //   return null;
  // }
  return {
    /* events: [
      {
        id: 1,
        title: "Code Father",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        imgsrc: "/images/dummy.jpg",
        tags: ["CSE", "DAY 1"],
        price: 500,
      },
      {
        id: 2,
        title: "Tech Expo 2024",
        description:
          "Explore the latest in technology and innovation. Join us for a day of exciting presentations and hands-on experiences.",
        imgsrc: "/images/dummy.jpg",
        tags: ["CSE", "DAY 1"],
        price: 250,
      },
      {
        id: 3,
        title: "Startup Summit",
        description:
          "Connect with industry leaders, investors, and fellow entrepreneurs. Gain insights and inspiration for your startup journey.",
        imgsrc: "/images/dummy.jpg",
        tags: ["CSE", "DAY 1"],
        price: 800,
      },
    ], */

    events: [
      {
        id: 3,
        title: "Startup Summit",
        imgsrc: "/images/dummy.jpg",
        tags: ["CSE", "DAY 1"],
        price: 800,
        date: "2024-06-10",
        time: "9:00 AM - 6:00 PM",
        groupOrIndividual: "Individual",
        blurb:
          "Join us for the Startup Summit, a transformative event for aspiring entrepreneurs.",
        description:
          "Embark on a journey of innovation and collaboration at the Startup Summit. This event provides a unique platform to connect with industry leaders, investors, and like-minded entrepreneurs. The day is filled with insightful panel discussions, success stories, and networking opportunities that can fuel your startup ambitions. Learn from seasoned professionals, pitch your ideas, and gain valuable feedback. The ticket price includes access to all sessions, workshops, networking events, and a chance to showcase your startup. Lunch and refreshments will be provided. Seize this opportunity to accelerate your entrepreneurial journey!",
        isAllowed: true,
      },
      {
        id: 4,
        title: "Science and Innovation Symposium",
        imgsrc: "/images/science_symposium.jpg",
        tags: ["Science", "Innovation", "Research"],
        price: 250,
        date: "2024-08-20",
        time: "10:00 AM - 5:00 PM",
        groupOrIndividual: "Group",
        blurb:
          "Immerse yourself in a world of scientific discovery and innovation.",
        description:
          "Explore the frontiers of science and innovation at our Symposium. Renowned scientists, researchers, and innovators will present groundbreaking discoveries and discuss the latest trends in scientific exploration. Engage in thought-provoking discussions, attend hands-on workshops, and connect with fellow enthusiasts. This event is free of charge and open to all passionate about the wonders of science. Lunch and networking opportunities are included.",
        isAllowed: true,
      },
      {
        id: 5,
        title: "Cultural Diversity Festival",
        imgsrc: "/images/cultural_festival.jpg",
        tags: ["Culture", "Diversity", "Arts"],
        price: 500,
        date: "2024-09-15",
        time: "6:00 PM - 10:00 PM",
        groupOrIndividual: "Individual",
        blurb:
          "Celebrate the richness of cultural diversity through art, music, and cuisine.",
        description:
          "Join us for a vibrant celebration of cultural diversity. The Cultural Diversity Festival showcases the beauty of various cultures through art exhibitions, musical performances, and a culinary journey. Immerse yourself in the colors, sounds, and flavors from around the world. The ticket price covers admission to all cultural performances, art displays, and a tasting experience of diverse cuisines. Don't miss this opportunity to foster understanding and appreciation for different cultures.",
        isAllowed: true,
      },
    ],
  };
};

export default DataHandler;
