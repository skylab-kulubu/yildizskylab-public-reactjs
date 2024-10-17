import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/landingPage";
import Navbar from "./Components/navbar";
import AboutPage from "./Pages/about";
import BoardPage from "./Pages/board";
import NewsPage from "./Pages/news";
import SitesPage from "./Pages/sites";
import Footer from "./Components/footer";
import TeamsPage from "./Pages/teams";

function App() {
  return (
    <div id="App" className="flex flex-col md:gap-0 gap-20">
      <Navbar />
      <LandingPage />
      <AboutPage />
      <TeamsPage />
      <NewsPage />
      <SitesPage />
      <BoardPage />
      <Footer />
    </div>
  );
}

export default App;
