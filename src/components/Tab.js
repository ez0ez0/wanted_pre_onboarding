import React, {useEffect, useState}from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 50px;
`;
const SlideMenu = styled.div`
  margin: 0 auto;
  width: 456px;
  height: 50px;
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  .textBox{
    z-index: 100;
    position: absolute;
    font-weight: 600;
    li{
      width: 153px;
      height: 50px;
      display: inline-block;
      text-align: center;
      line-height: 45px;
      transition: all 0.6s ease-out;
      color: rgba(0,0,0,0.4);
    }
    li:nth-child(${(props) => (Number(props.select)+ 1)}){
      color: #444;
    }
  }
`;
const Underline = styled.div`
  background-color: white;
  display: inline-block;
  line-height: 50px;
  width: 150px;
  height: 2px;
  margin-top: 48px;
  background-color: #11afaf;
  transition: all 0.5s ease-out;
  margin-left: ${(props) => (Number(props.select)*153)+'px'};
`;


const Tab = () => {
  const [select, setSelect] = useState(0);
  const clickedSelect = (e) => {
    setSelect(e.target.getAttribute('data-value'));
  }
  return (
    <div>
      <Wrapper>
        <SlideMenu select={select}>
          <ul className='textBox'>
            <li data-value='0' onClick={clickedSelect} >감자</li>
            <li data-value='1' onClick={clickedSelect} >고구마</li>
            <li data-value='2' onClick={clickedSelect} >카레라이스</li>
          </ul>
          <Underline select={select}/>
        </SlideMenu>
      </Wrapper>
    </div>
  );
};

export default Tab;