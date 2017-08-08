var React = require('react');
var Link = require('react-router-dom').Link;

function Header() {
  return (
    <div>
      <h1 className='title'>Moonbats</h1>
      <nav>
        <Link to="/Moonbats/" className='home'>Home</Link>
      </nav>
    </div>
  )
}




module.exports = Header;
