import React from "react";
import "./App.css";
import Header from "./container/header/Header.jsx";
import Hero from "./container/hero/Hero.jsx";
import Firstpage from "./container/firstpage/Firstpage";
import Secondpage from "./container/secondpage/Secondpage";
import Thirdpage from "./container/thirdpage/Thirdpage";
import Fourthpage from "./container/fourthpage/Fourthpage";
import Footer from "./container/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Firstpage />
      <Secondpage />
      <Thirdpage />
      <Fourthpage />
      <Footer />
    </div>
  );
};

export default App;
 