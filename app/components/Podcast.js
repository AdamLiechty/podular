const React = require('react');
const { Link } = require('react-router');

module.exports = React.createClass({
  render() {
    return (
      <div>
        Podcast
        <Link to="/podcasts/mypod/episodes/episode5">The Empire Strikes Back</Link>
        {this.props.children}
      </div>
    )
  }
});
