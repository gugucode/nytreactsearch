import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav';
import searchArticles from './pages/Home/searchArticles';
import ShowSavedArticles from './components/showSavedArticles'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={searchArticles} />
            <Route exact path="/articles/save" component={searchArticles} />
            <Route exact path="/articles/saved" component={ShowSavedArticles} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
