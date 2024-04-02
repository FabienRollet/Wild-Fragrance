
import './App.css'
//import NavBar from "./"
import Fragrance from './components/fragrance.jsx';
import list from "./components/Data.js";

function App() {

  return (
    <>
<Fragrance list={list}/>
    </>
  )
}



export default App
