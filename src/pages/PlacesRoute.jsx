import React from "react";
import Places from "../components/Places/Places";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const PlacesRoute = () => {
  return (
    <>
      <div className="pt-14">
        <Navbar />
        <Places />
        <Footer />
      </div>
    </>
  );
};

export default PlacesRoute;
