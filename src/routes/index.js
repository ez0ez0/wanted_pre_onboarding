import styles from './Routes.module.scss'
import Toggle from './Toggle'
import Tab from './Tab'
import Dropdown from './Dropdown'
import Input from './Input'
import Slider from './Slider'

function App() {
  return (
    <div className={styles.app}>
      <Toggle />
      <Tab />
      <Input />
      <Slider/>
      <Dropdown />
    </div>
  )
}

export default App
