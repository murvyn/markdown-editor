import { useContext } from "react";
import DarkMode from "../assets/DarkMode";
import { ToggleBox } from "./main.styles";
import ToggleButton from "./switch/Switch";
import { ContentContext } from "../contexts/contentContext";
import LightMode from "../assets/LightMode";

const Toggle = () => {
  const {mode} = useContext(ContentContext)
  return (
    <ToggleBox>
      <div  className="">
        <DarkMode fill={mode === 'dark' ? "#fff" : ''} />
      </div>
      <ToggleButton />
      <div className="">
        <LightMode fill={mode === 'light' ? "#fff" : ''} /> 
      </div>
    </ToggleBox>
  );
};

export default Toggle;
