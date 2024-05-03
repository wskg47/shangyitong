import React from "react";
import { Space } from "antd";
import styled from "styled-components";

const ComponentContent = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .main {
    width: 1200px;
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #a6a6a6;
    user-select: none;
    span {
      cursor: pointer;
    }
  }
`;

const HospitalBottom = () => {
  return (
    <>
      <ComponentContent>
        <div className="main">
          <div className="hospital-info">
            <Space size={15}>
              <span>京ICP证170426号</span>
              <span>京公网安备11010502032202号</span>
            </Space>
          </div>
          <div className="hospital-func">
            <Space size={15}>
              <span>联系我们</span>
              <span>合作伙伴</span>
              <span>用户协议</span>
              <span>隐私协议</span>
            </Space>
          </div>
        </div>
      </ComponentContent>
    </>
  );
};

export default HospitalBottom;
