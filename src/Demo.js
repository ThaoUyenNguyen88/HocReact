
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Contact from './demo/page/Contact';
import Navbar from './demo/layout/Navbar';
import User from './demo/page/User';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Demo() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={App} />
      </Switch>
    </Router>




  );
}

export default Demo;
