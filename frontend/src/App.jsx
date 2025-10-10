import ProductCard from "./ProductCard";
import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Home from "./Home"
import {Routes,Route} from 'react-router-dom'
function app() {
  return(
  <Routes>
     <Route path="/" element={<Home/>}/> 
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/home" element={<Home/>}/>
  
  </Routes>
  )
} 

export default app;