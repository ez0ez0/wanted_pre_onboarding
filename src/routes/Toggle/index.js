import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Toggle.module.scss'

function Toggle() {
  const cx = classNames.bind(styles)
  const [toggle, setToggle] = useState(false)
  const clickedToggle = (e) => {
    const { dataset } = e.currentTarget
    const { value } = dataset
    value === 'left' ? setToggle(false) : setToggle(true)
  }
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.toggleBtn}>
          <div className={styles.textBox}>
            <p data-value='left' style={toggle? {} : {color: '#444'}} onClick={clickedToggle} role='presentation'>기본</p>
            <p data-value='right' style={toggle? {color: '#444'} : {}} onClick={clickedToggle} role='presentation'>상세</p>
          </div>
          {/* className={cx(styles.task, { [styles.slide]: isTaskLeft && taskId === todo.id })} */}
          <div toggle={toggle} className={cx(styles.circle, {[styles.on] : toggle})} />
        </div>
      </div>
    </div>
  )
}

export default Toggle
