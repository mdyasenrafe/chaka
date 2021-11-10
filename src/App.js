import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/HomePage/Home/Home";
import NotMatch from "./Pages/NotMatch/NotMatch";
import ProuductsPage from "./Pages/ProductsPage/ProuductsPage";
import NavBar from "./Pages/SharedPage/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/services">
          <ProuductsPage></ProuductsPage>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotMatch></NotMatch>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
