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
      <img src="src/assets/Img/background.jpg" width={1000} height={250}></img>
      <Fragrance list={list} count={count} handleClickDown={handleClickDown} handleClickUp={handleClickUp} handleClick={handleClick} isFavourite={isFavourite} />
      <Footer/>
    </>
  );
}

export default App;
