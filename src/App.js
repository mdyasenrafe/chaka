import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Authprovider from "./Context/Authprovider";
import DashBoard from "./Pages/DashBoardPage/DashBoard/DashBoard";
import About from "./Pages/HomePage/About/About";
import Home from "./Pages/HomePage/Home/Home";
import Reviews from "./Pages/HomePage/Reviews/Reviews";
import Login from "./Pages/LoginPage/Login/Login";
import PrivateRoute from "./Pages/LoginPage/Login/PrivateRoute/PrivateRoute";
import Resigter from "./Pages/LoginPage/Resigter/Resigter";
import NotMatch from "./Pages/NotMatch/NotMatch";
import ProuductsPage from "./Pages/ProductsPage/ProuductsPage";
import Purchase from "./Pages/Purchase/Purchase";
import Footer from "./Pages/SharedPage/Footer/Footer";
import NavBar from "./Pages/SharedPage/NavBar/NavBar";

function App() {
  return (
    <Authprovider>
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/products">
            <ProuductsPage></ProuductsPage>
          </Route>
          <Route path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/resigter">
            <Resigter></Resigter>
          </Route>
          <PrivateRoute path="/purchase/:id">
            <Purchase></Purchase>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </Authprovider>
  );
}

export default App;
