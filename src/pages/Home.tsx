import React from "react";

// import components
import Navigation from "../components/Navigation";
import Card from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// import ant design
import { Col, Row } from "antd";

const Home: React.FC = () => (
  <>
    {/* header - start */}
    <Navigation />
    {/* header - end */}

    {/* content - start */}
    <div>
      <Row>
        {/* news - start */}
        <Col span={18}>
          <Card />
          {/* news - end */}
        </Col>

        {/* sidebar - start */}
        <Col span={6}>
          <Sidebar />
        </Col>
        {/* sidebar - end */}
      </Row>
    </div>
    {/* content - end */}

    {/* footer - start */}
    <Footer />
    {/* footer - end */}
  </>
);

export default Home;
