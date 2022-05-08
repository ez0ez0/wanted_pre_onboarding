import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Dropdown.module.scss'
import { ReactComponent as SearchIcon } from '../../icon/search_icon.svg'



function Dropdown () {
  const symbolList = ['BTCUSD.PERP', 'ETHUSD.PERP', 'BCHUSD.PERP', 'LTCUSD.PERP', 'XRPUSD.PERP']
  const [selected, setSelected] =useState('All Symbols')
  const [dropMenu, setDropMenu] = useState(false)
  const [searchWord, setSearchWord] = useState('')
  const [list, setList] = useState(symbolList)

  const onDropMenu = () => {
    setSearchWord('')
    setDropMenu(!dropMenu)
  }
  const offDropMenu =(e) => {
    const { dataset } = e.currentTarget
    const { value } = dataset
    setSelected(value)
    setSearchWord('')
    setDropMenu(false)
  }
  const handleChangeSearchWord = (e) => {
    const { value } = e.currentTarget
    console.log(value)
    setSearchWord(value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.selectBox} onClick={onDropMenu} role='presentation'>
        <span>{selected}</span> 
        <span className='right'>▼</span> 
      </div>
      { dropMenu ? 
        <div className={styles.dropMenu}>
          <div className={styles.search}>
            <SearchIcon className={styles.icon} stroke="#868E96"> </SearchIcon>
            <input value={searchWord} onChange={handleChangeSearchWord} placeholder='Search Symbol' type='text' />
          </div>
          <div className={styles.text} data-value ='All Symbols' onClick={offDropMenu}  role='presentation'>All Symbols</div>
          {searchWord!==''?
            list.map((el, idx) => { 
              return ( el.includes(searchWord.toUpperCase()) ? 
              <div key={`text-${idx}`} className={styles.text} data-value ={el} onClick={offDropMenu}  role='presentation'>{el}</div> : <> </>)
            })
            : 
            list.map((el, idx)=> (<div key={`text-${idx}`} className={styles.text} data-value ={el} onClick={offDropMenu}  role='presentation'>{el}</div>))
          }
        </div>
        :
        <> </>}
    </div>
  );
};

export default Dropdown;