import { useState } from 'react'
import styles from './Tab.module.scss'
import classNames from 'classnames/bind'


function Tab () {
  const cx = classNames.bind(styles)
  const [select, setSelect] = useState(0)
  const clickedSelect = (e) => {
    const { dataset } = e.currentTarget
    const { value } = dataset
    setSelect(value)
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.slideMenu} select={select}>
          <ul className={styles.textBox}>
            <li data-value='0' style={ select === '0' ? {color: `#444`} : {}} onClick={clickedSelect} role='presentation'>감자</li>
            <li data-value='1' style={ select === '1' ? {color: `#444`} : {}} onClick={clickedSelect} role='presentation'>고구마</li>
            <li data-value='2' style={ select === '2' ? {color: `#444`} : {}} onClick={clickedSelect} role='presentation'>카레라이스</li>
          </ul>
          <div className={styles.underline} style={{marginLeft : `${Number(select)*153}px`}}/>
        </div>
      </div>
    </div>
  );
};

export default Tab