import logo from "./logo.svg";
import "./App.css";
import Byjuslogo from "./components/Byjuslogo";
import Banner from "./components/Banner";
import HowDoesItWork from "./components/HowDoesItWork";
import AboutCareerLabs from "./components/AboutCareerLabs";
import Eligibility from "./components/Eligibility";
import NowOrNever from "./components/NowOrNever";
import Footer from "./components/Footer";
import Curriculum from "./components/Curriculum";
function App() {
  return (
    <div>
      <Byjuslogo />
      <Banner />
      <HowDoesItWork />
      <AboutCareerLabs />
      <Eligibility />
      <Curriculum />
      <NowOrNever />
      <Footer />
    </div>
  );
}

export default App;
