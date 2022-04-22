import React, {useState}from 'react';
import styled from 'styled-components';

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
    font-size: 10px;
    color: #444;
    margin-bottom: 5px;
  }
  .input {
    display: inline-block;
    width: 300px;
    height: 38px;
    border: 1px solid rgba(0,0,0, 0.1);
    background-color: #f9f9f9;
    padding: 0 10px;
    border-radius: 4px;
  }
  .input:focus{
    outline: 1px solid black;
  }
  .input::placeholder{
    font-size: 12px;
    color: rgba(0,0,0, 0.4);
  }
  span.red{
    color: red;
    font-size: 10px;
    margin-top: 3px;
    padding-left: 3px;
  }
`

const Input = () => {
  const [correct, setCorrect] = useState(false);
  return (
    <Wrapper>
      <Box>
        <div className='title'>E-mail</div>
        <input className='input' placeholder='E-mail'/>
        <span className='red'>Invalid e-mail address.</span>
      </Box>
      <Box>
        <div className='title'>Password</div>
        <input className='input' type='password' placeholder='Password'/>
      </Box>
    </Wrapper>
  );
};

export default Input;