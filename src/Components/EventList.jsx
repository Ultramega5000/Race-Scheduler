import { useState } from "react";
import TeamForm from "./TeamForm";

function EventList({ events, onAddTeam, onGenerateSchedule }) {
    const [teamName, setTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState(["", "", ""]);
    const [addTeamFormVisible, setAddTeamFormVisible] = useState(false);
    const [addTeamButtonVisible, setAddTeamButtonVisible] = useState(true);
    const [teamListCollapsed, setTeamListCollapsed] = useState(true);

    // Toggles visibility of add team form and button
    function toggleAddTeamForm() {
        setAddTeamFormVisible(prev => !prev);
        setAddTeamButtonVisible(prev => !prev);
    }

    //    function handleSubmit(e) {
    //        e.preventDefault();
    //       if (!teamName || teamMembers.some(member => !member)) return;
    //        onAddTeam({ name: teamName, members: teamMembers });
    //        setTeamName("");
    //        setTeamMembers(["", "", ""]);
    //        setAddTeamFormVisible(false);
    //        setAddTeamButtonVisible(true);

    //    }


    // Contains collapsable team list and button to add team
    return (
        <div>
            {events.map(event => (
                <div key={event.id} className="event-card">
                    <h2>{event.name}</h2>
                    <p>Date: {event.date}</p>
                    <p>Status: {event.status}</p>
                    <p>Location: {event.location}</p>
                    <button onClick={() => setTeamListCollapsed(prev => !prev)}>Teams: {teamListCollapsed ? "▲" : "▼"}</button>
                    {teamListCollapsed && (<div>
                        {
                            event.teams.length === 0 ? <p>No teams added yet.</p> : (
                                <ul>
                                    {event.teams.map(team => (
                                        <li key={team.id}>
                                            {team.name} - Members: {team.members.join(", ")}
                                        </li>
                                    ))}
                                </ul>
                            )
                        }
                    </div>
                    )}
                    {addTeamButtonVisible && <button onClick={() => toggleAddTeamForm()}>Add Team</button>}
                    {addTeamFormVisible && (
                        <TeamForm onAddTeam={onAddTeam} setAddTeamButtonVisible={setAddTeamButtonVisible} setAddTeamFormVisible={setAddTeamFormVisible} eventId={event.id} />
                    )}
                </div>)
            )
            }
        </div>
    )
}

export default EventList;