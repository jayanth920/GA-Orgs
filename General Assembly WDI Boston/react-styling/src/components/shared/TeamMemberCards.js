import React from 'react'
import teamMembers from '../../data/team-members'

const TeamMemberCards = () => {
  const teamCards = teamMembers.map(member => {
    return (
      <div key={member.id}>
        <img src={member.backgroundUrl} />
        <div>
          <div>{member.name}</div>
          <div>{member.description}</div>
        </div>
      </div>
    )
  })
  return (
    <div>
      { teamCards }
    </div>
  )
}

export default TeamMemberCards
