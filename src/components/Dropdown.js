import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../icon/search_icon.svg';

const Wrapper = styled.div`
  margin: 100px 0;
  width: 100%;
  height: 500px;
  font-size: 15px;
  color: #6f6f6f;
`
const SelectBox = styled.div`
  width: 350px;
  height: 38px;
  line-height: 38px;
  padding: 0 14px 0 10px;
  margin : 0 auto;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0, 0.1);
  .right{
    float: right;
    font-size: 5px;
  }
`
const DropMenu = styled.div`
  width: 350px;
  margin : 5px auto 0;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0, 0.1);
  box-shadow: 0px 0px 4px 2px rgb(0 0 0 / 5%);
  .search{
    width: 348px;
    height: 44px;
    border-bottom: 1px solid rgba(0,0,0, 0.1);
    .icon{
      height: 13px;
      margin: 16px 0 0 15px ;
      opacity: 0.5;
    }
    >input{
      padding-left: 10px;
      outline: none;
      border:none;
      font-size: 15px;
      color: #6f6f6f;
    }
    >input::placeholder{
      opacity: 0.5;
    }
  }
  .text{
    padding:0 30px;
    width: 350px;
    height: 38px;
    line-height: 38px;
  }
  .text:hover{
    background-color: rgba(0,0,0, 0.05);
  }
`

const Dropdown = () => {
  const symbolList = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP'];
  const [selected, setSelected] =useState('All Symbols');
  const [dropMenu, setDropMenu] = useState(false);
  const [searchWord, setSearchWord] = useState('');
  const [list, setList] = useState(symbolList);

  const onDropMenu = () => {
    setSearchWord('');
    setDropMenu(!dropMenu);
  }
  const offDropMenu =(e) => {
    console.log(e.target.value)
    setSelected(e.target.getAttribute('value'));
    setSearchWord('');
    setDropMenu(false);
  }
  const handleChangeSearchWord = (e) => {
    let word = e.target.value;
    setSearchWord(word);

  }

  return (
    <Wrapper>
      <SelectBox onClick={onDropMenu}>
        <span>{selected}</span> 
        <span className='right'>▼</span> 
      </SelectBox>
      { dropMenu ? 
        <DropMenu>
          <div className='search'>
            <SearchIcon className='icon' stroke="#868E96"></SearchIcon>
            <input value={searchWord} onChange={handleChangeSearchWord} placeholder='Search Symbol' type='text' autoFocus />
          </div>
          <div className='text' value ='All Symbols' onClick={offDropMenu}>All Symbols</div>
          {
            list.map((el, idx)=> {
              if(searchWord!==''){
                return  el.includes(searchWord.toUpperCase()) ? 
                <div key={idx} className='text' value ={el} onClick={offDropMenu}>{el}</div> : <></>
              }
              else {
                return <div key={idx} className='text' value ={el} onClick={offDropMenu}>{el}</div>
              }
            })
          }
        </DropMenu>
        :
        <></>
      }
    </Wrapper>
  );
};

export default Dropdown;