import React, 
{
  MouseEvent,
  MutableRefObject, 
  useCallback, 
  useEffect, 
  useRef, 
  useState 
} from "react";
import styled from "styled-components";

import Arrow from '../../../images/Arrow.svg'

type openedProps = {
  opened: boolean
}

const options = ["easy", "medium", "hard"];

const Root = styled.div`
  position: relative;
  width: 215px;
  z-index: 2;
`;

const Legend = styled.p`
  font-weight: 600;
  font-size:16px;
  line-height:24px;
  color: ${({theme})=>theme.palette.gray};
  margin: 0;
  margin-bottom:5px;
`;

const SelectWrapper = styled.div`
  background: #f8f8f8;
  border:1px solid #ececec;
  border-radius: 10px;
  height: 50px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;

const SelectText = styled.p`
  font-weight: 600;
  font-size:20px;
  line-height:30px;
  color: ${({theme})=>theme.palette.black};
  text-transform: capitalize;
  margin-right: 35px;
  `;

const SelectIcon = styled.img<openedProps>`
  margin-left: auto;
  transform: ${({opened})=>(opened ? 'rotateX(180deg)' : 'rotateX(0deg)')};
  transition: 0.3s transform;
`;

const Menu = styled.div<{opened: boolean}>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  transform: ${({opened})=>(opened ? 'scaleY(1)' : 'scaleY(0)')};
  transform-origin: top;
  width: 100%;
  transition: 0.4s transform;
  background: #f8f8f8;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 18px 23px;
`;
const Option = styled.button`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({theme,disabled})=> disabled ? theme.palette.gray : theme.palette.black};
  border: none;
  outline: none;
  background: none;
  text-align: left;
  text-transform: capitalize;
  padding: 9px;
  cursor: ${({disabled})=> disabled ? 'not-allowed' : 'pointer'};
  transition: 0.3s color;
  &:not(:last-of-type){
    border-bottom: 1px solid #dadada;
  }
`;

const ClickOutSideHandler = (e:globalThis.MouseEvent,
  ref:MutableRefObject<HTMLDivElement | null>,
  setState:React.Dispatch<React.SetStateAction<boolean>>,
  ) =>{
  const path = e.composedPath && e.composedPath();
  if(ref.current && !path.includes(ref.current)){
    setState(false);
  };
}

const Select = () => {
  const RootRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (e:MouseEvent<HTMLButtonElement>)  => {
    setSelected(e.currentTarget.value);
    setOpened(false);
  };

  const handleSelectClick = () => setOpened((state)=>!state);

  const ClickOutSideHandler = useCallback((e:globalThis.MouseEvent) => {
    const path = e.composedPath && e.composedPath();
    if(RootRef.current && !path.includes(RootRef.current)){
      setOpened(false);
    }
  },[]);

  useEffect(()=>{
    window.addEventListener('click',ClickOutSideHandler);

    return () => window.removeEventListener('click',ClickOutSideHandler);
  },[ClickOutSideHandler]);

  return (
    <Root ref={RootRef}>
      <Legend>Difficulty</Legend>
      <SelectWrapper onClick={handleSelectClick}>
        <SelectText>{selected}</SelectText>
        <SelectIcon opened={opened} src={Arrow} alt="Arrow Icon" />
      </SelectWrapper>
      <Menu opened={opened}>
        {options.map((option) => (
          <Option 
            key={option}
            onClick={handleSelect}
            disabled={selected === option}
            value={option}
            >
              {option}
            </Option>
        ))}
      </Menu>
    </Root>
  );
};

export default Select;
