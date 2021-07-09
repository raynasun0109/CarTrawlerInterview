import styles from './App.css';
import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import history from './history';
import Home from "../src/pages/Home/index";
import Detail from "../src/pages/Detail/index";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
class App extends React.Component {
  render() {
  return (
    <div className={styles.app}>
      <Router history={history}>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/detail" component={Detail} />
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
  }
}
export default App;
