
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
  return ({
    "events": [
      {
        "id": 1,
        "title": "Code Father",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
        "imgsrc": "/images/dummy.jpg",
        "tags": ["CSE","DAY 1"],
        "price": 500
      },
      {
        "id": 2,
        "title": "Tech Expo 2024",
        "description": "Explore the latest in technology and innovation. Join us for a day of exciting presentations and hands-on experiences.",
        "imgsrc": "/images/dummy.jpg",
        "tags": ["CSE","DAY 1"],
        "price": 250
      },
      {
        "id": 3,
        "title": "Startup Summit",
        "description": "Connect with industry leaders, investors, and fellow entrepreneurs. Gain insights and inspiration for your startup journey.",
        "imgsrc": "/images/dummy.jpg",
        "tags": ["CSE","DAY 1"],
        "price": 800
      }
    ]
});
  
};

export default DataHandler;
