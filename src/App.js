import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Blogs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
