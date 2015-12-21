const React = require('react');
const ReactDOM = require('react-dom');
const { Router, Route, Link } = require('react-router');
const createBrowserHistory = require('history/lib/createBrowserHistory')

const Routes = React.createClass({
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Route path="/" component={require('./App')}>
          <Route path="about" component={require('./About')}/>
          <Route path="podcasts/" component={require('./Podcasts')}>
            <Route path=":podcastId/" component={require('./Podcast')}>
              <Route path="episodes/:episodeId" component={require('./Episode')}/>
            </Route>
          </Route>
          <Route path="*" component={require('./NoMatch')}/>
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(<Routes />, document.getElementById('app'));
