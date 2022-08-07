import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import { getFromStorage, setToStorage } from "../../../services/storage";
import pen from "../../../images/pen.svg";

const InputWrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  background: ${({ theme }) => theme.palette.white};
  border: 2px solid #ececec;
  border-radius: 9px 0 0 9px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.palette.black};
  outline: none;
  width: 400px;
  padding: 12px 20px;
  &::placeholder {
    color: ${({ theme }) => theme.palette.gray};
  }
`;
const Button = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background: ${({ theme }) => theme.palette.violet};
  border-radius: 0 9px 9px 0;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const NameInput = () => {
  const [name, SetName] = useState(getFromStorage("name"));
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    SetName(e.target.value);
  const handleSave = () => name && setToStorage("name", name);
  return (
    <InputWrapper>
      <Input
        value={name}
        type="text"
        onChange={handleChange}
        placeholder="User Name"
      />
      <Button onClick={handleSave}>
        <img src={pen} alt="Pen" />
      </Button>
    </InputWrapper>
  );
};

export default NameInput;
