import React from "react";
import "./App.css";
import RouteView from "@/router/routes";

import HospitalHeader from "@/components/Hospital_header";
import HospitalBottom from "@/components/Hospital_bottom";

import styled from "styled-components";
const MainContainer = styled.div`
  width: 1200px;
  min-height: 960px;
  padding-bottom: 30px;
  margin: 0 auto;
  padding-top: 20px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <HospitalHeader />
      <MainContainer>
        <RouteView></RouteView>
      </MainContainer>
      <HospitalBottom />
    </div>
  );
};

export default App;
