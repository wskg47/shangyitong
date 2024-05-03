import React from "react";
import { Space } from "antd";

import Level from "./level";
import Region from "./region";
import HospitalList from "./hospitalList";

const HospitalInfo = () => {
  return (
    <>
      <Space direction="vertical" size={20}>
        <Level />
        <Region />
        <HospitalList />
      </Space>
    </>
  );
};

export default HospitalInfo;
