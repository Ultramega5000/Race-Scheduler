import React, { useState, useEffect } from 'react';
import EventForm from './Components/EventForm'
import EventList from './Components/EventList'

function Events() {
    const [events, setEvents] = useState([{
        id: 1,
        name: "Summer Regatta",
        location: "Harbor Bay",
        date: "2025-09-08",
        status: "upcoming", // "live" or "completed"
        teams: [
            { id: 1, name: "Blue Wave", members: ["Alice", "Bob"] },
            { id: 2, name: "Sea Hawks", members: ["Charlie", "Dana"] }
        ],
        races: [] // will be filled once event goes live
    }]);


    // Load from local storage on first render
    useEffect(() => {
        const stored = localStorage.getItem("events");
        if (stored) setEvents(JSON.parse(stored));
    }, []);

    // Update local storage if events is changed

    useEffect(() => {
        localStorage.setItem("events", JSON.stringify(events));
    }, [events]);

    // Add new event
    // Teams and races to be added at later time
    function addEvent(newEvent) {
        setEvents(prev => [...prev, { ...newEvent, status: "upcoming", id: Date.now(), teams: [], races: [] }]);
    }

    // Add team to event
    function addTeamToEvent(eventId, team) {
        setEvents(prev =>
            prev.map((event) =>
                event.id === eventId
                    ? { ...event, teams: [...event.teams, { ...team, id: Date.now() }] }
                    : event
            )
        )
    }

    return (
        <>
            <h1>Sailing Events</h1>
            <EventForm onAddEvent={addEvent} />
            <EventList
                events={events}
                onAddTeam={addTeamToEvent}
            />
        </>
    )
}

export default Events;