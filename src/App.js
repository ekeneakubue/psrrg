import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Contacts from "./pages/contacts/Contacts";
import Scholarships from "./pages/scholarships/Scholarships";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/activity" element={<Activities/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/scholarship" element={<Scholarships/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
