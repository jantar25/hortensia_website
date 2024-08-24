import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({duration:1000});
  localStorage.setItem('i18nextLng','english')
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
