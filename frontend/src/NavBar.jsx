import react from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
  return(
    <div className="flex justify-around h-16 items-center border-2 border-black w-full">
     <h1 className=" font-bold text-xl">Blogverse</h1>
        <Link to="/home" className="text-grey-500 hover: bg-blue-300 md:px-5 md:py-4 sm:px-5 sm:px-5 rounded-xl">Home</Link>
        <div> 
            <Link to="/signin" className="font-semibold text-grey-600 md:px-2 sm:px-2 cursor-pointer ">signin</Link>
            <Link to="/signup" className="bg-blue-500 text-white  md:px-5 sm:px-5 rounded-2xl sm:py-3">signup</Link>
        </div>
    </div>
  )
}
export default NavBar;
