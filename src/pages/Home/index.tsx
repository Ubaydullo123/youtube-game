import React from "react";
import styled from "styled-components";
import { Button } from "../../components/Button";

import Navbar from "../../components/Navbar";

const Menu = styled.div`
  background: ${({ theme }) => theme.background.primary};
  width: 870px;
  border-radius: 24px;
  padding:80px 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 132px;
`;
const MenuTitle = styled.h2`
  color: ${({ theme }) => theme.title.primary};
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 100px;
`;

const Home = () => {
  return (
    <div>
      <Navbar title="Memory Game" />
      <Menu>
        <MenuTitle>Start the game</MenuTitle>
        <Button width="370px">Start</Button>
        <Button width="370px" style={{
          marginTop: '25px'
        }}>Settings</Button>
      </Menu>
    </div>
  );
};

export default Home;
