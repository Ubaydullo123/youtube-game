import React, { FC } from "react";
import styled from "styled-components";

type checkedProp = {
  checked: boolean;
};

const Wrapper = styled.div<checkedProp>`
  width: 43px;
  height: 22px;
  border-radius: 15.5px;
  background: ${({ checked }) => (checked ? "#41ca48" : "#cecece")};
  padding: 1px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

`;
const Controller = styled.div<checkedProp>`
  height: 22px;
  width: 22px;
  background: #fcfff5;
  box-shadow: -1px 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  transform: ${({ checked }) => (checked ? "translate(21px)" : "translate(0)")};
`;

type Props = {
  checked: boolean;
  onCheck: React.Dispatch<React.SetStateAction<boolean>>;
};

const Switch: FC<Props> = ({ checked, onCheck }) => {
  const handleChange = () => onCheck((state) => !state);
  return (
    <Wrapper checked={checked} onClick={handleChange}>
      <Controller checked={checked} />
    </Wrapper>
  );
};

export default Switch;
