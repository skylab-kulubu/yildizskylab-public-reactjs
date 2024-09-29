import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/landingPage";
import Navbar from "./Components/navbar";
import AboutPage from "./Pages/about";
import BoardPage from "./Pages/board";
import SitesPage from "./Pages/sites";
import Footer from "./Components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col md:gap-0 gap-20">
        <Navbar />
        <LandingPage />
        <AboutPage  />
        <SitesPage />
        <BoardPage  />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
