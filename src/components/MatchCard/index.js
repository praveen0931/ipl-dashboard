// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentWinCard} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = recentWinCard

  const getMatchStatusResult = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `${getMatchStatusResult(matchStatus)}`
  return (
    <li className="match-card-container-list">
      <div>
        <img
          src={competingTeamLogo}
          alt="team logo"
          className="team-logo-image "
        />
        <h1 className="competing-team-heading">{competingTeam}</h1>
        <p className="match-results">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
