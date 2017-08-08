var React = require('react');

function TeamPicker() {
  let teams = ['Washington Nationals', 'Philadelphia Phillies', 'Atlanta Braves', 'New York Mets', 'Miami Marlins']

  return (
      <select>
        {teams.map((team, index) => {
          return (
            <option
              key={team}
              value={index + 1}>
              {team}
            </option>
          )
        })}
      </select>
  )
}



function Home() {
  return (
    <TeamPicker />
  )
}
module.exports = Home;
