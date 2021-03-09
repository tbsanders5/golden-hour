import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Pricing from "./Components/Pricing";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id='allButFooter'>
        {/* <p>WORK!!!!</p> */}
        <Router>
          {/* <Header /> */}
          <div>
            <Route exact path="/" component={About} />
            {/* <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} /> */}
            {/* <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} /> */}
            {/* <Route exact path={process.env.PUBLIC_URL + "/pricing"} component={Pricing} /> */}
          </div>
        </Router>
      </div>
      {/* <footer id='footer' className='bg-dark text-white-50'>
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
