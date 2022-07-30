import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: ${({theme})=>theme.background.primary};
`;

const NavbarTitle = styled.h1`
  color: ${({ theme }) => theme.title.primary};
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
`;

const Navbar: FC<Props> = ({ title }) => {
  return (
    <Nav>
      <NavbarTitle>{title}</NavbarTitle>
    </Nav>
  );
};

export default Navbar;
