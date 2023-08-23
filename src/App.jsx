import React from "react";
import Contact from "./sections/Contact/Contact";
import Header from "./sections/Header/Header";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Recipe from "./sections/Recipe/Recipe";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <div className="font-poppins bg-back">
      <Header />
      <Home />
      <About />
      <Recipe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
