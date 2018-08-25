import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/nav';
import searchArticles from './pages/Home/searchArticles';
import ShowSavedArticles from './pages/Saved/showSavedArticles';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={searchArticles} />
            <Route exact path="/savedArticles" component={ShowSavedArticles} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
