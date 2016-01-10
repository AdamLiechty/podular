const React = require('react');
const { Link } = require('react-router')

module.exports = React.createClass({
  render() {
    return (
      <div>
        Welcome to the app
        <Link to="/podcasts/mypod">My Pod</Link>
        {this.props.children}
      </div>
    )
  }
});
