import react from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
  return(
    <div className="flex justify-around h-16 items-center border-2 border-black w-full">
     <h1 className=" font-bold text-xl">Blogverse</h1>
        <Link to="/home" className="text-grey-500 hover: bg-blue-300 px-5 py-4 rounded-xl">Home</Link>
        <div> 
            <Link to="/signin" className="font-semibold text-grey-600 px-2 cursor-pointer">signin</Link>
            <Link to="/signup" className="bg-blue-500 text-white px-5 rounded-2xl py-3">signup</Link>
        </div>
    </div>
  )
}
export default NavBar;
