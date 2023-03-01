// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-bg-container">
      <div className="opposite-team-container">
        <h1 className="heading">{competingTeam}</h1>
        <h1 className="heading">{date}</h1>
        <p className="description">{venue}</p>
        <p className="description">{result}</p>
      </div>
      <div className="team-logo-container">
        <img
          src={competingTeamLogo}
          alt={competingTeamLogo}
          className="team-logo "
        />
      </div>
      <div className="match-details-container">
        <p className="description">First Innings</p>
        <p className="description">{firstInnings}</p>
        <p className="description">Second Innings</p>
        <p className="description">{secondInnings}</p>
        <p className="description">Man Of The Match</p>
        <p className="description">{manOfTheMatch}</p>
        <p className="description">Umpires</p>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
