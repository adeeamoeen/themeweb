import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
   <Navbar/>
   <Intro/>
   <Footer/>
    </div>
  );
}


export default App;
