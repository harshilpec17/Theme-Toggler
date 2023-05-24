import { useState } from 'react';
import {ThemeContext2} from './Context/ThemeContext2';
import HeroSection from './Components/Body2';
import './App.css';
import ThemeToggler2 from './Components/ThemeToggler2';

const App =  () => {
  const themeHook = useState("light")
  return (
      <ThemeContext2.Provider value={themeHook}>
        <div>
          <ThemeToggler2 />
          <HeroSection />
        </div>
      </ThemeContext2.Provider>
  );
}

export default App;
