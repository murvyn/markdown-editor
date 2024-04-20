import { useContext } from 'react'
import { Slider, Switch } from './switch.styles'
import { ContentContext } from '../../contexts/contentContext';

const ToggleButton = () => {
  const {mode, setMode} = useContext(ContentContext)
  const handleChange = () => {
    mode === 'light' ? setMode('dark') : setMode('light')
  };
  return (
    <Switch>
        <input title='mode'  type="checkbox" onChange={handleChange} />
        <Slider mode={mode} />
    </Switch>
  )
}

export default ToggleButton