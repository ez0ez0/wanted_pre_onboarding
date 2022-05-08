import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Slider.module.scss'


function Slider() {
  const cx = classNames.bind(styles)
  const [lineWidth, setLineWidth] = useState(0);
  const [move, setMove] = useState(false);

  const clickPercent = (e) => {
    setLineWidth(e.target.getAttribute('data-value'));
  }
  const mouseDownOnLineBar = (e) => {
    setMove(true)
    let width = document.getElementById('lineBar').getClientRects()[0].x
    let num = e.clientX-width
    setLineWidth(Math.floor((num) / 5))
  }
  const mouseMoveOnDot = (e) => {
    if(move){
      let width = document.getElementById('lineBar').getClientRects()[0].x
      let num = e.clientX-width
      setLineWidth(Math.floor((num) / 5))
    }
  }
  return (
    <div>
      <div className={styles.wrapper} onMouseUp={(e)=>{setMove(false)}} role='presentation'>
        <div className={styles.box}>
          <span>%</span>
          <span className={styles.left}>{lineWidth === 0 ? 1 : lineWidth}</span>
        </div>
        <div className={styles.slide} lineWidth={lineWidth} onMouseMove={mouseMoveOnDot} >
          <ul className={styles.dot}>
            <li className={cx({[styles.on ] : lineWidth >= 1})}> </li>
            <li className={cx({[styles.on ] : lineWidth >= 25})}> </li>
            <li className={cx({[styles.on ] : lineWidth >= 50})}> </li>
            <li className={cx({[styles.on ] : lineWidth >= 75})}> </li>
            <li className={cx({[styles.on ] : lineWidth >= 100})}> </li>
          </ul>
          <ul  className={styles.text}>
            <li data-value='1' onClick={clickPercent} role='presentation'>1%</li>
            <li data-value='25' onClick={clickPercent} role='presentation' className={styles.left}>25%</li>
            <li data-value='50' onClick={clickPercent} role='presentation'>50%</li>
            <li data-value='75' onClick={clickPercent} role='presentation' className={styles.right}>75%</li>
            <li data-value='100' onClick={clickPercent} role='presentation'>100%</li>
          </ul>
          <div className={styles.lineBar} id='lineBar' lineWidth={lineWidth} onMouseDown={mouseDownOnLineBar} onMouseUp={(e)=>{setMove(false)}}  role='presentation'>
            <div className={styles.colorLine} style={{width: `${(500*lineWidth)/100}px`}}> </div>
            <div className={styles.clickDot} style={{marginLeft: `${478 * (lineWidth === '1' ? 0: lineWidth)/100}px`}}> </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;