import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Input.module.scss'
import checkBlack from '../../icon/check_black.png'
import checkBlue from '../../icon/check_blue.png'
import hidden from '../../icon/hidden.png'
import view from '../../icon/view.png'

function Input(){
  const [correct, setCorrect] = useState(0)
  const [emailValue, setEmailValue] = useState('')
  const [spanState, setSpanState] = useState(false)
  const [viewPassword, setViewPassword] = useState(false)
  
  const handleSpan = (e) => {
    if(correct === false){
      setSpanState(true)
    } else if(correct === true){
      setSpanState(false)
    }
  }
  const handleCorrectEmail = (e) => {
    const email = e.currentTarget.value
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    setEmailValue(email)
    if(email.match(regex)){
      setCorrect(true)
      setSpanState(false)
    } 
    else{ 
      setCorrect(false)
    }
  }
  const handleViewPassword = () => {
    setViewPassword(!viewPassword)
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.box}>
        <div className={styles.title}>E-mail</div>
        <div className={styles.input}>
          <input className={styles.email} placeholder='E-mail' onChange={handleCorrectEmail} onBlur={handleSpan} value={emailValue}/>
          <span className={styles.right}>
            <img className={styles.icon1} src={correct ? checkBlue : checkBlack} style={correct ?{opacity:'1'} : {opacity: '0.2'}}/>
          </span>
        </div>
        {spanState ? <span className={styles.red}>Invalid e-mail address.</span> : <> </> } 
      </div>
      <div className={styles.box}>
        <div className={styles.title}>Password</div>
        <div className={styles.input}>
          <input className={styles.password} type={viewPassword ? 'text' : 'password'} placeholder='Password'/>
          <span className={styles.right}>
            <img className={styles.icon2} src={viewPassword ? view : hidden} style={viewPassword ? {opacity:'0.6'} : {opacity: '0.2'}} onClick={handleViewPassword} role='presentation' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Input;