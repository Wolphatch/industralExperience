import React, { useRef } from "react";

//Pages
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "./fact";

const MainPage = () => {
  const myRef = useRef(null);

  return (
    <>
      <div>
        <Navbar />
        {/* <Header myRef={myRef} /> */}

        {/* <div style={{ height: 50 }} /> */}

        <Main myRef={myRef} />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainPage;
