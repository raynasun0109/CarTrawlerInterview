import React from 'react';
import {Switch, Router, Route} from 'react-router-dom';
import history from './history';
import Home from "../src/pages/Home/index";
import CarDetail from "./pages/CarDetail/index";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import CarList from "./pages/CarList/index";
import "./App.css";
import AboutUs from "./pages/AboutUs/index";
import CheckOut from "./pages/Checkout/index"
import NotFound from "./pages/NotFound/index"
class App extends React.Component {

  render() {
  return (
    <div className={"app"}>
      <Router history={history}>
          <Header/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/checkout" component={CheckOut} />
              <Route exact path="/car" component={CarList} />
              <Route exact path="/car/:id" component={CarDetail} />
              <Route path="*" component={NotFound} />
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
  }
}
export default App;
