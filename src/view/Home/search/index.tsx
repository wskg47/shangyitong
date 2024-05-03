import React from "react";
import styled from "styled-components";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { SearchProps } from "antd/es/input/Search";
import { reqHospitalInfo } from "@/API/home";

const SearchStyle = styled.div`
  width: 100%;
  padding: 20px 300px;
`;

const HomeSearch: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value) => {
    reqHospitalInfo(value).then((result) => {
      console.log(result);
    });
  };
  return (
    <>
      <SearchStyle>
        <Input.Search
          placeholder="请输入医院名称"
          allowClear
          enterButton={
            <Button type="primary" icon={<SearchOutlined />}>
              搜索
            </Button>
          }
          size="middle"
          onSearch={onSearch}
        />
      </SearchStyle>
    </>
  );
};

export default HomeSearch;
