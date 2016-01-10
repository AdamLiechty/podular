const React = require('react');

module.exports = React.createClass({
  render() {
    return (
      <div>
        Podcasts
        {this.props.children}
      </div>
    )
  }
});
