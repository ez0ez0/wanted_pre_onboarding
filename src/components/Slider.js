import React, {useEffect, useState}from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  /* background-color: red; */
  .Box{
    margin: 0 auto;
    width: 500px;
    height: 70px;
    border: 1px solid rgba(0,0,0, 0.1);
    background-color: #f9f9f9;
    border-radius: 8px;
    margin-bottom: 30px;
    padding: 0 30px;
    span{
      float: right;
      line-height: 70px;
    }
    span.left{
      margin-right: 10px;
    }
  }
`;
const Slide = styled.div`
  margin: 0 auto;
  width: 500px;
  border-top: 6px solid #ececec;
  cursor: pointer;
  > ul.dot {
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    position: relative;
    top:-12px;
    > li {
      width: 18px;
      height: 18px;
      border-radius: 50px;
      background-color: #ececec;
      display: inline-block;
      text-align: center;
      line-height: 45px;
      color: rgba(0,0,0,0.4);
    }
    >li.on {
      background-color: #11afaf;
    }
  }
  > ul.text {
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    /* position: relative;
    top:-13px; */
    > li {
      width: 44px;
      height: 24px;
      line-height: 24px;
      font-size: 13px;
      border-radius: 50px;
      background-color: #ececec;
      display: inline-block;
      text-align: center;
      color: rgba(0,0,0,0.3);
    }
    > li:hover{
      font-weight: 500;
      color: #ececec;
      background-color: #11afaf;
    }
  }
`;
const LineBar = styled.ul`
  margin: 0 auto;
  width: 504px;
  height: 18px;
  cursor: pointer;
  line-height: 50px;
  position: relative;
  top:-54px;
  /* border: 1px solid red; */
  
  .clickDot{
    width: 24px;
    height: 24px;
    border: 4px solid white;
    box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 16%);
    border-radius: 50px;
    background-color: #11afaf;
    margin-top: -15px;
    margin-left: ${(props) => (478 * (props.lineWidth === '1' ? 0: props.lineWidth)  /100)+'px'};
    z-index: 100;
  }

  .colorLine{
    width: ${(props) => ((500 * props.lineWidth /100))+'px'};
    height: 6px;
    background-color:#11afaf;
    margin-top: 5px;
  }
  /* margin-left: ${(props) => (Number(props.lineWidth)*153)+'px'}; */
  
`;

const Slider = () => {
  const [lineWidth, setLineWidth] = useState(0);
  const [move, setMove] = useState(false);

  const clickPercent = (e) => {
    setLineWidth(e.target.getAttribute('data-value'));
  }
  const mouseDownOnLineBar = (e) => {
    setMove(true)
    let width = document.getElementById('lineBar').getClientRects()[0].x;
    let num = e.clientX-width;
    setLineWidth(parseInt((num) / 5));
  }
  const mouseMoveOnDot = (e) => {
    if(move){
      let width = document.getElementById('lineBar').getClientRects()[0].x;
      let num = e.clientX-width;
      setLineWidth(parseInt((num) / 5));
    }
  }
  return (
    <div>
      <Wrapper onMouseUp={(e)=>{setMove(false)}}>
        <div className='Box'>
          <span>%</span>
          <span className='left'>{lineWidth === 0 ? 1 : lineWidth}</span>
        </div>
        <Slide lineWidth={lineWidth} onMouseMove={mouseMoveOnDot} >
          <ul className='dot'>
            <li className={lineWidth >= 1 ? 'on' : ''}></li>
            <li className={lineWidth >= 25 ? 'on' : ''}></li>
            <li className={lineWidth >= 50 ? 'on' : ''}></li>
            <li className={lineWidth >= 75 ? 'on' : ''}></li>
            <li className={lineWidth >= 100 ? 'on' : ''}></li>
          </ul>
          <ul className='text'>
            <li data-value='1' onClick={clickPercent}>1%</li>
            <li data-value='25' onClick={clickPercent} className='left'>25%</li>
            <li data-value='50' onClick={clickPercent}>50%</li>
            <li data-value='75' onClick={clickPercent} className='right'>75%</li>
            <li data-value='100' onClick={clickPercent}>100%</li>
          </ul>
          <LineBar id='lineBar' lineWidth={lineWidth} onMouseDown={mouseDownOnLineBar} onMouseUp={(e)=>{setMove(false)}}>
            <div className='colorLine'></div>
            <div className='clickDot'></div>
          </LineBar>
        </Slide>
      </Wrapper>
    </div>
  );
};

export default Slider;