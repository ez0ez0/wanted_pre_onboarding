import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
`
const SelectBox = styled.div`
  width: 350px;
  height: 38px;
  line-height: 38px;
  padding: 0 10px;
  margin : 0 auto;
  border: 1px solid rgba(0,0,0, 0.1);
  .right{
    float: right;
    font-size: 10px;
  }
`
const DropMenu = styled.div`
  width: 350px;
  margin : 0 auto;
  border: 1px solid rgba(0,0,0, 0.1);
  .search{
    width: 350px;
    height: 38px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
  }
  .text{
    padding:0 30px;
    width: 350px;
    height: 38px;
    line-height: 38px;
  }
  .text:hover{
    background-color: yellow;
  }
`

const Dropdown = () => {
  const [selected, setSelected] =useState('All Symbols');
  const [dropMenu, setDropMenu] = useState(false);

  const onDropMenu = () => {
    setDropMenu(true);
  }
  const offDropMenu =(e) => {
    console.log(e.target.value)
    setSelected(e.target.getAttribute('value'));
    setDropMenu(false);
  }

  return (
    <Wrapper>
      <SelectBox onClick={onDropMenu}>
        <span>{selected}</span> 
        <span className='right'>▼</span> 
      </SelectBox>
      { dropMenu ? 
        <DropMenu>
          <input className='search'/>
          <div className='text' value ='All Symbols' onClick={offDropMenu}>All Symbols</div>
          <div className='text' value ='BTCUSD.PERP' onClick={offDropMenu}>BTCUSD.PERP</div>
          <div className='text' value ='ETHUSD.PERP' onClick={offDropMenu}>ETHUSD.PERP</div>
          <div className='text' value ='BCHUSD.PERP' onClick={offDropMenu}>BCHUSD.PERP</div>
          <div className='text' value ='LTCUSD.PERP' onClick={offDropMenu}>LTCUSD.PERP</div>
          <div className='text' value ='XRPUSD.PERP' onClick={offDropMenu}>XRPUSD.PERP</div>
        </DropMenu>
        :
        <></>
      }
    </Wrapper>
  );
};

export default Dropdown;