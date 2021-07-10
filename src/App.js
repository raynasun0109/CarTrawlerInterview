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
// import {connect} from "react-redux";
import Redux1Comp from "./components/Redux1Comp";
import Goods from "./components/Goods";
class App extends React.Component {

  render() {
      // const {count} = this.props
  return (
    <div className={"app"}>
      <Router history={history}>
          <Header/>
          <Redux1Comp/>
          <Goods/>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/car" component={CarList} />
              <Route exact path="/car/:id" component={CarDetail} />
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
  }
}
export default App;
// const mapStateToProps=state=>{
//     console.log(state);
//     return state.count
// }
// export default connect(mapStateToProps)(App);
