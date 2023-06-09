import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import About from "./components/About";
import ScholarshipPage from "./components/ScholarshipPage";

function App() {
  return (
    <div className="font-custom">
      <Navbar />
      <Hero />
      <About />
      <ScholarshipPage/>
      <Blogs />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
