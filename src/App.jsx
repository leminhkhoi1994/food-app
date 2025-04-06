import Adventure from "./components/Adventure/Adventure";
import "./assets/styles/main.scss";
import Header from "./components/Header/Header";
import FoodCarousel from "./components/FoodCarousel/FoodCarousel";
import Experiences from "./components/Experiences/Experiences";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Explore from "./components/ExploreBanner/Explore";
import Footer from "./components/Footer/Footer";
import Map from "./components/Maps/map";
import ActivityBooking from "./components/ActivityBooking/ActivityBooking";


function App() {
  return (
    <div>
      <Header />
      <Adventure />
      <Map />
      <ActivityBooking />
      <FoodCarousel />
      <Experiences />
      <SocialMedia />
      <Explore />
      <Footer />
    </div>
  );
}

export default App;
