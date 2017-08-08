var React = require('react');
var Header = require('./Header');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;



class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
      </div>
    )
  }
}

module.exports = App;
