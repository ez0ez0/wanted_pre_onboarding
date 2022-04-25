import React, {useState}from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 50px;
`;
const ToggleBtn = styled.div`
  margin: 0 auto;
  width: 306px;
  height: 50px;
  border-radius: 30px;
  background-color: #ececec;
  cursor: pointer;
  padding: 3px;
  .textBox{
    z-index: 100;
    position: absolute;
    font-weight: 600;
    >p{
      width: 153px;
      height: 50px;
      display: inline-block;
      text-align: center;
      line-height: 45px;
      transition: all 0.6s ease-out;
      color: rgba(0,0,0, 0.4);
    }
  }
  .off{
    transform: translate(0, 0);
  }
  .on{
    transform: translate(150px, 0);
  }
`;
const Circle = styled.div`
  background-color: white;
  display: inline-block;
  line-height: 50px;
  width: 150px;
  height: 44px;
  border-radius: 50px;
  background-color: white;
  transition: all 0.5s ease-out;
`;


const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = (e) => {
    let value = e.target.getAttribute('value');
    value === 'left' ? setToggle(false) : setToggle(true);
  };
  return (
    <div>
      <Wrapper>
        <ToggleBtn>
          <div className='textBox'>
            <p value='left' style={toggle? {} : {color: '#444'}} onClick={clickedToggle}>기본</p>
            <p value='right' style={toggle?{color: '#444'} : {}} onClick={clickedToggle}>상세</p>
          </div>
          <Circle toggle={toggle} className={toggle? 'on': 'off'}/>
        </ToggleBtn>
      </Wrapper>
    </div>
  );
};


export default Toggle;