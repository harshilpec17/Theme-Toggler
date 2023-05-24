import { useContext } from "react";
import { ThemeContext2 } from "../Context/ThemeContext2";
import AppTheme from "../Colors";

const HeroSection = () => {
  const currentContext = useContext(ThemeContext2)[0];
  const currentTheme = AppTheme[currentContext];

  return (
    <div style={{ backgroundColor: currentTheme.backgroundColor }}>
      <h1 style={{ color: currentTheme.textColor, textAlign: "center"}}>I am learning</h1>
      <h3 style={{color: currentTheme.textColor, textAlign:"center"}}>Wish me luck</h3>
    </div>
  );
};

export default HeroSection;
