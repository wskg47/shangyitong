import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Pagination, Empty } from "antd";
import styled from "styled-components";
import { useStoreSelector } from "@/store/hooks";

import { reqHospital } from "@/API/home";
import type { Content } from "@/API/home/type";

const HospitalMain = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HospitalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;
  .hospital-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .name {
      font-size: 16px;
      color: #000;
    }
    .info {
      display: flex;
      gap: 40px;
      color: #737373;
    }
  }
  .hospital-logo {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HospitalList = () => {
  const [hospitalList, setHospitalList] = useState<Content>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [totalPage, setTotalPage] = useState<number>(0);
  const navigate = useNavigate();
  // 获取医院等级和地区
  const { hospitalLevel, districtCode } = useStoreSelector(
    (state) => state.home
  );
  // 获取医院列表
  useEffect(() => {
    reqHospital(currentPage, pageSize, hospitalLevel, districtCode).then(
      (res) => {
        setTotalPage(res.data.totalElements);
        setHospitalList(res.data.content);
      }
    );
  }, [currentPage, pageSize, hospitalLevel, districtCode]);

  /**
   * @description: 分页切换
   * @param {number} page
   * @param {number} pageSize
   * @return {*}
   */
  const onChange = (page: number, pageSize: number) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  /**
   * @description: 跳转到医院详情页
   * @return {*}
   */
  const goHospitalDetail = (hoscode: string) => {
    console.log(hoscode);

    const hoscode1 = "1000_0";
    navigate(`/hospital/register?hoscode=${hoscode1}`);
  };
  return (
    <HospitalMain>
      {totalPage > 0 ? (
        <>
          <Row gutter={[16, 16]}>
            {hospitalList.map((item) => (
              <Col span={12} key={item.id}>
                <Card
                  size="small"
                  hoverable
                  onClick={() => {
                    goHospitalDetail(item.hoscode);
                  }}
                >
                  <HospitalContainer>
                    <div className="hospital-info">
                      <div className="name">{item.hosname}</div>
                      <div className="info">
                        <p>{item.param.hostypeString}</p>
                        <p>{item.bookingRule.releaseTime}放号</p>
                      </div>
                    </div>
                    <div className="hospital-logo">
                      <img
                        src={`data:image/jpeg;base64,${item.logoData}`}
                        alt=""
                      />
                    </div>
                  </HospitalContainer>
                </Card>
              </Col>
            ))}
          </Row>
          <Pagination
            style={{ marginTop: "20px" }}
            defaultCurrent={currentPage}
            defaultPageSize={pageSize}
            onChange={onChange}
            total={totalPage}
          />
        </>
      ) : (
        <Empty />
      )}
    </HospitalMain>
  );
};

export default HospitalList;
