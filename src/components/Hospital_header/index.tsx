import React from "react";
import { Space } from "antd";
import styled from "styled-components";
import Logo from "@/assets/images/logo.png";

const ComponentContent = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 999;
  .main {
    width: 1200px;
    height: 100%;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    .hospital-info {
      .logo {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .hospital-name {
        font-size: 20px;
        color: #538fce;
      }
    }
    .hospital-func {
      span {
        cursor: pointer;
      }
    }
  }
`;

const HospitalHeader = () => {
  return (
    <>
      <ComponentContent>
        <div className="main">
          <div className="hospital-info">
            <Space size={15}>
              <div className="logo">
                <img src={Logo} alt="医院logo" />
              </div>
              <div className="hospital-name">人民医院预约挂号统一平台</div>
            </Space>
          </div>
          <div className="hospital-func">
            <Space size={15}>
              <span>帮助中心</span>
              <span>登录/注册</span>
            </Space>
          </div>
        </div>
      </ComponentContent>
    </>
  );
};

export default HospitalHeader;
