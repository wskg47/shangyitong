import React, { useState } from "react";
import getHospitalLevelAndRegion from "@/hooks/getHospitalLevelAndRegion";
import type { HospitalLevelAndRegion } from "@/API/home/type";
import { useStoreDispatch } from "@/store/hooks";
import { setDistrictCode } from "@/store/features/homeSlice";

import styled from "styled-components";

const RegionContainer = styled.div`
  display: flex;
  gap: 10px;
  user-select: none;
  p {
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      color: #538fce;
    }
  }
  .active {
    color: #538fce;
  }
`;

const Level = () => {
  const { hospitalLevelAndRegion } = getHospitalLevelAndRegion("Beijin");
  const dispatch = useStoreDispatch();
  /**
   * @description: 点击高亮地区
   * @return {*}
   */
  const [active, setActive] = useState(0);
  const changeActive = (id: number, value: string) => {
    setActive(id);
    dispatch(setDistrictCode(value));
  };
  return (
    <>
      <RegionContainer>
        <span>地区：</span>
        <p
          className={active === 0 ? "active" : ""}
          onClick={() => changeActive(0, "")}
        >
          全部
        </p>
        {hospitalLevelAndRegion.map((item: HospitalLevelAndRegion) => {
          return (
            <p
              key={item.id}
              onClick={() => changeActive(item.id, item.value)}
              className={active === item.id ? "active" : ""}
            >
              {item.name}
            </p>
          );
        })}
      </RegionContainer>
    </>
  );
};

export default Level;
