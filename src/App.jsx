import "./App.css";
import Fragrance from "./components/fragrance.jsx";
import NavBar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import list from "./components/Data.js";

function App() {
  return (
    <>
      <NavBar/>
      <img src="src/assets/Img/background.jpg" width={1000} height={250}></img>
      <Fragrance list={list} />
      <Footer/>
    </>
  );
}

export default App;
