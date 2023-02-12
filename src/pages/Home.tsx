import React from "react";

// import components
import Navigation from "../components/Navigation";
import Apple from "../components/Apple";
import Tesla from "../components/Tesla";
import Business from "../components/Business";
import Footer from "../components/Footer";

function Home() {
  return (
    <body>
      {/* header - start */}
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipPneq6pLLAg2INNSYuQvdQvs4Bj_Snm2K40vSFP=s1360-w1360-h1020"
        alt=""
        style={{ height: "10rem" }}
      />
      <Navigation />
      {/* header - end */}

      {/* content - start */}
      <div>
        {/* apple news - start */}
        <Apple />
        <Tesla />
        <Business />
        {/* apple news - end */}
      </div>
      {/* content - end */}

      {/* sidebar - start */}
      <div></div>
      {/* sidebar - end */}

      {/* footer - start */}
      <Footer />
      {/* footer - end */}
    </body>
  );
}

export default Home;
