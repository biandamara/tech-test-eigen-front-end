import React from "react";

// import ant design
import { Col, Row } from "antd";

const Footer: React.FC = () => (
  <>
    <Row>
      <Col span={12}>
        <p>&copy; {new Date().getFullYear()} Copyright Eigen News</p>
      </Col>
      <Col span={12}>
        <a id="facebook" href="https://www.facebook.com/">
          <i data-feather="facebook"></i>
        </a>
        <a id="twitter" href="https://www.twitter.com/">
          <i data-feather="twitter"></i>
        </a>
        <a id="instagram" href="https://www.instagram.com/">
          <i data-feather="instagram"></i>
        </a>
      </Col>
    </Row>
  </>
);

export default Footer;
