
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Contact from './components/page/Contact';
import Navbar from './components/layout/Navbar';
import User from './components/page/User';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={User} />
      </Switch>
    </Router>




  );
}

export default App;
