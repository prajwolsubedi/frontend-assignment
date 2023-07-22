import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#d6cfcf] ">
        <h2 className="font-mono text-lg text-center p-52">
          This is profile section!!
        </h2>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
