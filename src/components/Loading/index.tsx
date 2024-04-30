import React from "react";
import { Flex } from "antd";
import { Spin } from "antd";

const Loading = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <Spin tip="Loading" size="small">
          <div className="content" />
        </Spin>
      </Flex>
    </>
  );
};

export default Loading;
