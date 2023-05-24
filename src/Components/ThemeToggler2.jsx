import { useContext } from "react";
import { ThemeContext2 } from "../Context/ThemeContext2";

const ThemeToggler = () => {
  const [theme, setTheme] = useContext(ThemeContext2);
  return (
    <div>
      <button className="btn"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Theme Toggler
      </button>
    </div>
  );
};

export default ThemeToggler;
