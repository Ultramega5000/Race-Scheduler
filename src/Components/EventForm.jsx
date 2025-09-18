import React, { useState } from "react";


function EventForm({ onAddEvent }) {
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventLocation, setEventLocation] = useState("");

    // Adds new event and resets form
    function handleSubmit(e) {
        e.preventDefault();
        if (!eventName || !eventDate || !eventLocation) return;
        onAddEvent({ name: eventName, date: eventDate, location: eventLocation });
        setEventName("");
        setEventDate("");
        setEventLocation("");
    }

    return (
        <div>
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text" value={eventName}
                        onChange={e => setEventName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="date" value={eventDate}
                        onChange={e => setEventDate(e.target.value)}
                    />
                </div>
                <div>
                    <label>Event Location:</label>
                    <input
                        type="text" value={eventLocation}
                        onChange={e => setEventLocation(e.target.value)}
                    />
                </div>
                <button type="submit">Add Event</button>
            </form>
        </div>
    );
}
export default EventForm;