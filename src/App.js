import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Activities from "./pages/activities/Activities";
import Contacts from "./pages/contacts/Contacts";
import Scholarships from "./pages/scholarships/Scholarships";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Application from "./pages/app-form/Application";

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
          <Route path="/login" element={<Login/>} />
          <Route path="/application" element={<Application/>} />
          <Route path='/psrrg-dashboard' component={() => {
              window.location.href = 'https://psrrg-dashboard.vercel.app/';
              return null;
          }}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
