import "./App.css";
import Fragrance from "./components/fragrance.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import list from "./components/Data.js";
import { useState } from "react";

function App() {

  const [count, setCount] = useState(0)
  
  const handleClickUp =() => {
    setCount (count +1);
  }

  const handleClickDown = () => {
    count > 0 
      ? setCount(count - 1)
      : count;
  }
 
  const [isFavourite, setIsFavourite] = useState(list.isFavorite);
  const handleClick = () => {
    setIsFavourite(!isFavourite);
  }

  return (
    <>
      <NavBar/>
      <img src="src/assets/Img/background.jpg"></img>
      <Fragrance list={list} count={count} handleClickUp={handleClickUp} handleClickDown={handleClickDown} handleClick={handleClick}/>
      <Footer/>
    </>
  );
}

export default App;
