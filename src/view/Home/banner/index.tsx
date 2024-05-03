import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import bannerImg from "@/assets/images/web-banner-1.png";

const BannerStyle = styled.div`
  width: 100%;
  height: 350px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HomeBanner: React.FC = () => {
  return (
    <>
      <BannerStyle>
        <Carousel autoplay autoplaySpeed={2000} fade arrows={true}>
          <div>
            <img src={bannerImg} alt="" />
          </div>
          <div>
            <img src={bannerImg} alt="" />
          </div>
          <div>
            <img src={bannerImg} alt="" />
          </div>
          <div>
            <img src={bannerImg} alt="" />
          </div>
        </Carousel>
      </BannerStyle>
    </>
  );
};

export default HomeBanner;
