import React, { useState } from "react";
import getHospitalLevelAndRegion from "@/hooks/getHospitalLevelAndRegion";
import type { HospitalLevelAndRegion } from "@/API/home/type";
import styled from "styled-components";
import { useStoreDispatch } from "@/store/hooks";
import { setHospitalLevel } from "@/store/features/homeSlice";

const LevelContainer = styled.div`
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
  const { hospitalLevelAndRegion } = getHospitalLevelAndRegion("Hostype");
  const dispatch = useStoreDispatch();

  /**
   * @description: 点击高亮等级
   * @return {*}
   */
  const [active, setActive] = useState(0);

  const changeActive = (id: number, value: string) => {
    dispatch(setHospitalLevel(value));
    setActive(id);
  };
  return (
    <>
      <LevelContainer>
        <span>等级：</span>
        <p
          className={active === 0 ? "active" : ""}
          onClick={() => {
            changeActive(0, "");
          }}
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
      </LevelContainer>
    </>
  );
};

export default Level;
