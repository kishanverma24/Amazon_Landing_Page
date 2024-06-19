import React from "react";

import Navbar from "../components/navbar/Navbar.jsx";
import Hero from "../components/hero/Hero.jsx";
import Shop from "../components/shopSection/Shop.jsx";
import Footer from "../components/footer/Footer.jsx";
import TodayDeals from "../components/todayDeals/TodayDeals.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Shop />
      <TodayDeals />
      <Footer />
    </>
  );
}

export default Home;
