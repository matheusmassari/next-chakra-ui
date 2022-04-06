
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

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const documents = await client
        .collection(collection)
        .find(filter)
        .sort(sort)
        .toArray();
        
    return documents;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();    
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => id === event.id);
}

export async function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;

    const allEvents = await getAllEvents();

    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month - 1
        );
    });
    return filteredEvents;
}
