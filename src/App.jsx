import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Scale from "./components/Scale";
import Retail from "./components/Retail";
import Lifestyle from "./components/Lifestyle";
import Dinning from "./components/Dinning";
import Events from "./components/Events";
import Attractions from "./components/Attractions";
import Luxury from "./components/Luxury";
import AttractionDetail from "./components/AttractionDetail";

function Home() {
  return (
    <>
      <Hero />
      <Scale />
      <Retail />
      <Luxury />
      <Dinning />
      <Lifestyle />
      <Events />
      <Attractions />
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attractions/:slug" element={<AttractionDetail />} />
      </Routes>

      <Footer />
    </>
  );
}