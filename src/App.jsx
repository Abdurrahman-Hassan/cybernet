import About from "./components/About";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Get from "./components/Get";
import Header from "./components/Header";
import ImageCarousal from "./components/ImageCarousel";
import Nbb from "./components/Nbb";
import Why from "./components/Why";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <ImageCarousal />
      <About />
      <Why />
      <Nbb />
      <Get />
      <Faqs />
      <Contact />
    </div>
  );
}

export default App;
