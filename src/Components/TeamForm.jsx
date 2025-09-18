import { useState } from "react";

function TeamForm({ onAddTeam, setAddTeamFormVisible, setAddTeamButtonVisible, eventId }) {
    const [teamName, setTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState(["", "", ""]);

    // Submits team with the eventId, also makes form invisible again and makes form button visible again
    function handleSubmit(e) {
        e.preventDefault();
        if (!teamName || teamMembers.some(member => !member)) return;
        onAddTeam(eventId, { name: teamName, members: teamMembers });
        setTeamName("");
        setTeamMembers(["", "", ""]);
        setAddTeamFormVisible(false);
        setAddTeamButtonVisible(true);

    }



    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Team Name:</label>
                <input
                    type="text" value={teamName}
                    onChange={e => setTeamName(e.target.value)}
                />
            </div>
            <div>
                <label>Member 1:</label>
                <input
                    type="text" value={teamMembers[0]}
                    onChange={e => setTeamMembers((prev) =>
                        prev.map((item, i) => (i === 0 ? e.target.value : item)))}
                />
            </div>

            <div>
                <label>Member 2:</label>
                <input
                    type="text" value={teamMembers[1]}
                    onChange={e => setTeamMembers((prev) =>
                        prev.map((item, i) => (i === 1 ? e.target.value : item)))}
                />
            </div>

            <div>
                <label>Member 3:</label>
                <input
                    type="text" value={teamMembers[2]}
                    onChange={e => setTeamMembers((prev) =>
                        prev.map((item, i) => (i === 2 ? e.target.value : item)))}
                />
            </div>
            <button type="submit">Add Team</button>
        </form>
    )
}

export default TeamForm;