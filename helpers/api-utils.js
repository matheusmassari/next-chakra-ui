const axios = require("axios");

export async function getAllEvents() {
  try {
    const response = await axios.get(
      "https://nextjs-tests-a65b1-default-rtdb.firebaseio.com/.json"
    );
    const events = [];
    for (const key in response.data) {
      events.push({
        id: key,
        ...response.data[key],
      });
    }
    return events;
  } catch (error) {
    console.log(error);
  }
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
