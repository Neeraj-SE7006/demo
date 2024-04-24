import React from "react";
import img from "../assets/comp-img.png";
import { Signin } from "../Auth/Signin";
import "./pagesStyles/Admin.css";
import SearchBar from "../components/Search";
import Footer from "../components/Footer";
const Admin = () => {
  return (
    <>
      <div className="main">
        <div className="search">
          <SearchBar />{" "}
        </div>
        <div className="container">
          <div className="left">
            <img src={img} alt="Image not found!!" />
          </div>
          <div className="right">
            <Signin />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Admin;
