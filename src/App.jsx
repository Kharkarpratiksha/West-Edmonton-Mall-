import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scale from "./components/Scale";
import Retail from "./components/Retail";
import Lifestyle from "./components/Lifestyle";
import Dinning from "./components/Dinning";
import Events from "./components/Events";
import Attractions from "./components/Attractions";
import Luxury from "./components/Luxury";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />  
      <Scale />
      <Retail />
      <Luxury />
      <Dinning />
      <Lifestyle />
      <Events />
      <Attractions />
      <Footer />
    </>
  );
}

export default App;