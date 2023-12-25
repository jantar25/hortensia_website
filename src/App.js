import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { useState} from "react";
import ScrollToTop from './Pages/ScrolToTop'
import Navbar from './Components/Home/Navbar'
import Sidebar from './Components/Home/Navbar/Sidebar';
import Home from './Pages/Home'
import Apropos from './Pages/Apropos'
import Evenement from './Pages/Evenement'
import Programme from './Pages/Programme'
import Edition from './Pages/Edition'
import Footer from "./Components/Home/Footer";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Apropos' exact component={Apropos} />
        <Route path='/Evenement' exact component={Evenement} />
        <Route path='/Programme' exact component={Programme} />
        <Route path='/Edition' exact component={Edition} />
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
