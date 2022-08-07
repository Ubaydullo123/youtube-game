import styled from "styled-components";

const Menu = styled.div`
  background: ${({ theme }) => theme.background.primary};
  width: 870px;
  border-radius: 24px;
  padding: 80px 0 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 132px;
`;

export default Menu;
