import React, {useState}from 'react';
import styled from 'styled-components';
import check_black from '../icon/check_black.png';
import check_blue from '../icon/check_blue.png';
import hidden from '../icon/hidden.png';
import view from '../icon/view.png';

const Wrapper = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 300px;
`;

const Box = styled.div`
  width: 300px;
  padding-top: 30px;
  margin: 0 auto;
  .title {
    padding-left: 8px;
    font-size: 12px;
    color:#535353;
    margin-bottom: 3px;
  }
  .input {
    display: inline-block;
    width: 300px;
    height: 38px;
    border: 1px solid rgba(0,0,0, 0.1);
    background-color: #f9f9f9;
    padding: 0 10px;
    border-radius: 4px;    
    >input{
      border: none;
      outline: none;
      height: 36px;
      line-height: 38px;
      font-size: 16px;
      background-color: #f9f9f9;
    }
    >input::placeholder{
      color: rgba(0,0,0, 0.2);
    }
    >span.right{
      float: right;
    }
    .icon1{
      width: 20px;
      padding: 9px 0;
    }
    .icon2{
      width: 22px;
      padding: 7px 0;
    }
  }
  
  span.red{
    color: red;
    font-size: 11px;
    padding-left: 3px;
  }
`

const Input = () => {
  const [correct, setCorrect] = useState(0);
  const [emailValue, setEmailValue] = useState('');
  const [spanState, setSpanState] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const emailFocus = document.getElementsByClassName('e-mail');
  
  const handleSpan = (e) => {
    if(correct === false){
      setSpanState(true);
    } else if(correct === true){
      setSpanState(false);
    }
  }
  const handleCorrectEmail = (e) => {
    let email = e.target.value;
    let regex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    setEmailValue(email);
    if(email.match(regex)){
      setCorrect(true);
      setSpanState(false);
    } 
    else{ 
      setCorrect(false);
    }
  }
  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  }
  return (
    <Wrapper>
      <Box>
        <div className='title'>E-mail</div>
        <div className='input'>
          <input className='e-mail' placeholder='E-mail' onChange={handleCorrectEmail} onBlur={handleSpan} value={emailValue}/>
          <span className ='right'>
            <img className='icon1' src={correct ? check_blue : check_black} style={correct ?{opacity:'1'} : {opacity: '0.2'}}/>
          </span>
        </div>
        {spanState ? <span className='red'>Invalid e-mail address.</span> : <></> } 
      </Box>
      <Box>
        <div className='title'>Password</div>
        <div className='input'>
          <input className='password' type={viewPassword ? 'text' : 'password'} placeholder='Password'/>
          <span className ='right'>
            <img className='icon2' src={viewPassword ? view : hidden} style={viewPassword ? {opacity:'0.6'} : {opacity: '0.2'}} onClick={handleViewPassword}/>
          </span>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Input;