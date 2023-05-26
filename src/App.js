import { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import HeroSection from './Components/Body';
import './App.css';
import Header from './Components/Header';

const App =  () => {
  const themeHook = useState("light")
  return (
      <ThemeContext.Provider value={themeHook}>
        <div>
          <Header />
          <HeroSection />
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
