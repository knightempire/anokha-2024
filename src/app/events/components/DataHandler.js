const DataHandler = async () => {
  try {
    // need to change to server api endpoint (used json-server to create a temp server)
    const response = await fetch("http://localhost:3001/events/");
    const data = await response.json();
    console.log("Data:", data);
    return data;
  } catch (err) {
    console.error("Error getting Event Data:", err);
    return null;
  }
};

export default DataHandler;
