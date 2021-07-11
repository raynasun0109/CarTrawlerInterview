import React from 'react';
import {Switch,BrowserRouter as Router, Route} from 'react-router-dom';
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

    state={
        routers:[
            {
                exact:true,
                path:"/",
                component:Home
            },
            {
                exact:true,
                path:"/about",
                component:AboutUs
            },
            {
                exact:true,
                path:"/checkout",
                component:CheckOut
            },
            {
                exact:true,
                path:"/car",
                component:CarList
            },
            {
                exact:true,
                path:"/car/:id",
                component:CarDetail
            },
            {
                exact:false,
                path:"*",
                component:NotFound
            }

        ]
    }

  render() {
        const {routers} = this.state
  return (
    <div className={"app"}>
      <Router>
          <Header/>
          <Switch>
              {
                  routers.map((item,index)=>{

                      return (
                          <Route exact={item.exact} path={item.path} component={item.component} />
                      )

              })

              }
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
  }
}
export default App;
