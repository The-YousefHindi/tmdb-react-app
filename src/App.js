import HomePage from "./pages/HomePage/HomePage";
import PopularMovies from "./pages/PopularMovies/PopularMovies";
import NotFound404 from "./pages/NotFound404/NotFound404";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";


function App() {
  const [pageTitle, setPageTitle] = useState('Home');
  /* const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("Home");
        break;
      case "PopularMovies":
        setPageTitle("Popular Movies");
        break;
      default:
        setPageTitle("");
        break;
    }
  }, [location.pathname]); */

  return (
    <div className="app-wrapper">
      <Router>
        <Header Title={pageTitle || "Home"} setPageTitle={setPageTitle}/>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/PopularMovies" element={<PopularMovies />} />
              <Route path="*" element={<NotFound404 />} />
            </Routes>
          </main>
        <Footer />
      </Router>
    </div>
    
    
  );
}

export default App;
