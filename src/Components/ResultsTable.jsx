
function ResultsTable({ getTeamRaces, getTeamWins, teams }) {

    function orderTeamsByWins() {
        let teamsWithWins = teams.map(team => {
            let winPercent = null;
            if (getTeamRaces(team.id) > 0) {
                winPercent = ((getTeamWins(team.id) / getTeamRaces(team.id)) * 100).toFixed(1);
            }

            return { ...team, wins: getTeamWins(team.id), winPercent: winPercent };
        })
        return teamsWithWins.sort((a, b) => b.winPercent - a.winPercent);
    }

    return (
        <div>

            <table className="results-table">
                <thead className="results-headers">
                    <tr>
                        <th>Team</th>
                        <th>Wins</th>
                        <th>Win %</th>
                    </tr>
                </thead>
                <tbody>
                    {orderTeamsByWins().map(team => {
                        return (<tr key={team.id} className="results-table-row">
                            <td>{team.name}</td>
                            <td>{team.wins}</td>
                            {(getTeamRaces(team.id) > 0) ? (<td>{team.winPercent}</td>) : (<td>N/A</td>)}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default ResultsTable;
