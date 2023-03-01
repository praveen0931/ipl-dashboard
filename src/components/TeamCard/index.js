// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeamIpl} = props
  const {name, teamImageUrl, id} = eachTeamIpl
  return (
    <li className="ipl-list">
      <Link to={`/team-matches/${id}`} className="link">
        <div className="team-card-container">
          <img src={teamImageUrl} alt={name} className="team-image" />
          <p className="ipl-team-heading">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
