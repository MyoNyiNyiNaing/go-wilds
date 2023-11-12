import React from "react";
import Path from "./routes/Path";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";

import "./App.css"


const App = () => {
  return (
    <>
      
        <Navbar />
      <Path />
      <Footer />
    </>
  );
};

export default App;
