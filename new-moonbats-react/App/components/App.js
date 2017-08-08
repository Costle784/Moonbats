var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Header = require('./Header');
var Home = require('./Home');


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Route exact path='/Moonbats' component={Home} />
        </div>
      </Router>
    )
  }
}

module.exports = App;
