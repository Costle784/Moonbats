var React = require('react');

function TeamPicker(props) {
  let baseballTeams = ['Washington Nationals', 'Philadelphia Phillies', 'Atlanta Braves', 'New York Mets', 'Miami Marlins']
  let teams = baseballTeams.map((team, index) => {
    return (
      <option
        key={team}
        value={index + 1}>
        {team}
      </option>
    )
  })
  return (
      <select onChange={(e) => props.onChange(e)}>
        {teams}
      </select>
  )
}



function Home(props) {

  return (
    <div className='home-container'>
      <TeamPicker onChange={(e) => props.handleChange(e)}  />
      <p><img src='https://media.giphy.com/media/aN9GqoR7OD3nq/giphy.gif'></img></p>
      <img className='bats' src='http://www.pngmart.com/files/1/Baseball-Bat-Transparent-PNG.png'></img>
    </div>
  )
}
module.exports = Home;
