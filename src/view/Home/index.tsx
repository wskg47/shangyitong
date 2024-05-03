import React from "react";
import { Row, Col } from "antd";

import HomeBanner from "./banner";
import HomeSearch from "./search";
import Tip from "./tip";
import HospitalInfo from "./hospitalInfo";

const Home: React.FC = () => {
  return (
    <>
      <HomeBanner />
      <HomeSearch />
      <Row>
        <Col span={19}>
          <HospitalInfo />
        </Col>
        <Col span={5}>
          <Tip />
        </Col>
      </Row>
    </>
  );
};

export default Home;
