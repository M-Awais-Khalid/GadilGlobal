
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { Route,  Routes } from 'react-router-dom';
import DemoForm from './Components/DermoRequest/DemoForm';
import FaqSection from './Components/FaqSection/FaqSection';
import ContactUs from './Pages/Contact/ContactUs';
import AboutUs from './Pages/Company/AboutUs';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/demoRequest" element={<DemoForm />} />
    <Route path="/demo" element={<FaqSection/>} />
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/Company" element={<AboutUs/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
