import React, { useState, useEffect, useRef } from "react";
import { useStoreSelector } from "@/store/hooks";
import { Flex, Space, Col, Row } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { getHospitalDepartment } from "@/API/hospital";
import type { HospitalDepartment } from "@/API/hospital/type";
import { useSearchParams } from "react-router-dom";

const HospitalName = styled.div`
  display: flex;
  align-items: flex-end;
  user-select: none;
  .name {
    font-size: 28px;
    font-weight: bold;
    margin-right: 10px;
  }
  .level {
    font-size: 14px;
    color: #f34d00;
  }
`;

const PictureImg = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    user-select: none;
  }
`;

const HospitalMain = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: #878787;
  padding-left: 20px;
  .title {
    color: #000;
    font-weight: bold;
    font-size: 18px;
    user-select: none;
  }
`;

const DepartmentMain = styled.div`
  display: flex;
  margin-top: 20px;
  .department {
    min-width: 90px;
    margin-right: 20px;
    ul {
      transition: all 0.3s;
      li {
        position: relative;
        padding: 10px 15px;
        background-color: #f8f8f8;
        text-align: center;
        cursor: pointer;
        user-select: none;
      }
      .active {
        background-color: #fff;
        color: #f34d00;
        &::after {
          content: "";
          display: block;
          width: 2px;
          height: 100%;
          background-color: #f34d00;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .department-detail {
    flex: 1;
    max-height: 500px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .item {
      .department-title {
        background-color: #f8f8f8;
        font-weight: bold;
        user-select: none;
        display: block;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 100%;
        li {
          width: 33.333%;
          padding: 5px 0;
          cursor: pointer;
          transition: all 0.3s;
          &:hover {
            color: #f34d00;
          }
        }
      }
    }
  }
`;

function Register() {
  const [hospitalDepartment, setHospitalDepartment] =
    useState<HospitalDepartment[]>();
  const { hospital, bookingRule } = useStoreSelector((state) => state.hospital);
  const [searchParams] = useSearchParams();
  const hoscode = searchParams.get("hoscode");

  useEffect(() => {
    getHospitalDepartment(hoscode).then((res) => {
      setHospitalDepartment(res.data);
    });
  }, [hoscode]);
  const containerRef = useRef<HTMLDivElement>(null);

  // 默认激活列表
  const [active, setActive] = useState<number>(0);
  const changeTab = (index: number, e: React.MouseEvent<HTMLLIElement>) => {
    setActive(index);
  };
  useEffect(() => {
    const departmentItems = document.querySelectorAll(".department-title");
    if (containerRef.current && departmentItems[active]) {
      const element = departmentItems[active] as HTMLElement;
      // 需滚动距离
      const elementOffsetTop =
        element.offsetTop - containerRef.current.offsetTop;

      containerRef.current.scrollTo({
        top: elementOffsetTop,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <>
      <Flex vertical gap={20}>
        <Space>
          <HospitalName>
            <span className="name">{hospital.hosname}</span>
            <span className="level">
              <LikeOutlined />
              {hospital.param?.hostypeString}
            </span>
          </HospitalName>
        </Space>
        <div className="hospital-info">
          <Row>
            <Col span={2}>
              <PictureImg>
                <img
                  src={`data:image/jpeg;base64,${hospital.logoData}`}
                  alt=""
                />
              </PictureImg>
            </Col>
            <Col span={22}>
              <HospitalMain>
                <Space direction="vertical">
                  <p className="title">挂号规则</p>
                  <p>
                    <Space size={7}>
                      <span>
                        <b>预约周期：</b>
                        {bookingRule.cycle}
                      </span>
                      <span>
                        <b>放号时间：</b>
                        {bookingRule.releaseTime}
                      </span>
                      <span>
                        <b>停挂时间：</b>
                        {bookingRule.stopTime}
                      </span>
                    </Space>
                  </p>
                  <p>
                    <span>
                      <b>具体位置：</b>
                      {hospital.param?.fullAddress}
                    </span>
                  </p>
                  <p>
                    <span>
                      <b>具体路线：</b>
                      {hospital.route}
                    </span>
                  </p>
                  <p>
                    <span>
                      <b>退号时间：</b>
                      {`就诊前一工作日${bookingRule.quitTime}前取消`}
                    </span>
                  </p>
                  <p className="title">预约取号地点</p>
                  {bookingRule.rule &&
                    bookingRule.rule.map((item: any, index: number) => (
                      <p key={index}>{item}</p>
                    ))}
                </Space>
              </HospitalMain>
            </Col>
          </Row>
        </div>
      </Flex>
      <DepartmentMain>
        <div className="department">
          <ul>
            {hospitalDepartment &&
              hospitalDepartment.map((item, index) => (
                <li
                  key={item.depcode}
                  onClick={(e) => changeTab(index, e)}
                  className={active === index ? "active" : ""}
                >
                  {item.depname}
                </li>
              ))}
          </ul>
        </div>
        <div className="department-detail" ref={containerRef}>
          {hospitalDepartment &&
            hospitalDepartment.map((item: any, index) => (
              <div className="item" key={item.depcode}>
                <h3 className="department-title">{item.depname}</h3>
                <ul>
                  {item.children &&
                    item.children.map((child: any) => (
                      <li key={child.depcode}>{child.depname}</li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </DepartmentMain>
    </>
  );
}

export default Register;
