import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./Component/add";
import BlogDetail from "./Component/BlogDetail";
import NotFound from "./Component/NotFound";
import Login from "./Component/Login";
import Footer from "./Component/Footer";

function App() {
  // state


  // comportement


  // affichage (render)
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="contenu">
          <Switch >
            <Route exact path={'/'}>
              <Home />
              <Footer/>
            </Route>
            <Route exact path={"/add"} >
              <Add />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route>
              <Login exact path="/Login" />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  )
}

export default App;