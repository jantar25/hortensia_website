import Home from "./Pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init({duration:2000});
  return (
    <div className="font-Manrope">
      <Home />
    </div>
  );
}

export default App;
