import React from "react";
import styled from "styled-components";
import problemSVG from "@/assets/svg/problem.svg";

const TipContainer = styled.div`
  padding: 0 10px;
  user-select: none;
  cursor: pointer;
  .tip-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    color: #767676;
    font-size: 16px;
    .title-icon {
      display: flex;
      gap: 5px;
    }
  }
  .tip-content {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      li {
        width: 50%;
        padding: 10px 0;
        transition: all 0.3s;
        &:hover {
          color: #2acdff;
        }
      }
      .flex1 {
        width: 100%;
        white-space: nowrap; /* 防止文本换行 */
        overflow: hidden; /* 隐藏超出容器的文本 */
        text-overflow: ellipsis; /* 在文本溢出时显示省略号 */
        &:hover {
          color: #2acdff;
        }
      }
    }
  }
`;

const data = [
  {
    id: 1,
    title: "常见科室",
    flex: 2,
    data: [
      "神经内科",
      "消化内科",
      "呼吸内科",
      "血液内科",
      "内分泌科",
      "风湿免疫科",
      "儿科",
      "妇科",
    ],
  },
  {
    id: 2,
    title: "平台公告",
    flex: 1,
    data: [
      "【公告】关于2021年11月21日-22日全院放假通知",
      "【公告】关于2021年11月21日-22日全院放假通知",
      "【公告】关于2021年11月21日-22日全院放假通知",
      "【公告】关于2021年11月21日-22日全院放假通知",
    ],
  },
  {
    id: 3,
    title: "停诊公告",
    flex: 1,
    data: [
      "【停诊公告】2021年11月21日-22日全院停诊公告",
      "【停诊公告】2021年11月21日-22日全院停诊公告",
      "【停诊公告】2021年11月21日-22日全院停诊公告",
    ],
  },
];

const Tip: React.FC = () => {
  return (
    <>
      {data.map((item) => (
        <TipContainer key={item.id}>
          <div className="tip-title">
            <span className="title-icon">
              <img src={problemSVG} alt="" />
              {item.title}
            </span>
            <span>全部 &gt;</span>
          </div>
          <div className="tip-content">
            <ul>
              {item.data.map((child, index) => (
                <li key={index} className={item.flex === 1 ? "flex1" : ""}>
                  {child}
                </li>
              ))}
            </ul>
          </div>
        </TipContainer>
      ))}
    </>
  );
};

export default Tip;
