var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Redirect = ReactRouter.Redirect;
var Header = require('./Header');
var Home = require('./Home');


class App extends React.Component {
  constructor() {
    super()

  
  }
  addSchedule(e) {
    console.log(e.target);
    console.log('hello');
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <Header />
          <Switch>
            <Route exact path='/Moonbats' component={() => (<Home handleChange={(e) => this.addSchedule(e)} />)}/>
            <Redirect from='/' to='/Moonbats' />
            <Route exact path='/teams/:id/games' />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
