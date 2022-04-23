import './App.css';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import Dropdown from './components/Dropdown';
function App() {
  return (
    <div className="App">
      <Toggle></Toggle>
      <Tab></Tab>
      <Slider></Slider>
      <Input></Input>
      <Dropdown></Dropdown>
    </div>
  );
}

export default App;
