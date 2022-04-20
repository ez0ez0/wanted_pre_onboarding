import React, {useState}from 'react';
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
  border-bottom: 1px solid #ececec;;
  /* background-color: #ececec; */
  /* border: none; */
  cursor: pointer;
  padding: 3px;
  .textBox{
    z-index: 100;
    position: absolute;
    font-weight: 600;
    p{
      width: 153px;
      height: 50px;
      display: inline-block;
      text-align: center;
      line-height: 45px;
      transition: all 0.6s ease-out;
      color: rgba(0,0,0,0.4);
    }
  }
`;
const Underline = styled.div`
  background-color: white;
  display: inline-block;
  line-height: 50px;
  width: 150px;
  height: 2px;
  margin-top: 45px;
  background-color: green;
  transition: all 0.5s ease-out;
  margin-left: ${(props) => (Number(props.select)*150)+'px'};
`;


const Tab = () => {
  const [select, setSelect] = useState(0);
  const clickedSelect = (e) => {
    setSelect(e.target.getAttribute('data-value'));
  }
  // const clickedselect = () => {
  //   setselect((prev) => !prev);
  // };
  return (
    <div>
      <Wrapper>
        <SlideMenu select={select}>
          <div className='textBox'>
            <p data-value='0' onClick={clickedSelect} style={{color : select === 0 ? 'red' : ''}}>감자</p>
            <p data-value='1' onClick={clickedSelect} style={{color : select === 1 ? 'red' : ''}}>고구마</p>
            <p data-value='2' onClick={clickedSelect} style={{color : select === 2 ? 'red' : ''}}>카레라이스</p>
          </div>
          <Underline select={select}/>
        </SlideMenu>
      </Wrapper>
    </div>
  );
};

export default Tab;