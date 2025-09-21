import react from 'react';
import NavBar from "./NavBar"
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Mail } from 'lucide-react';
import { useState } from "react";
const SignIn = () => {
    const [formData, setformData] = useState(
        {

            email: "",
            password: "",
        }
    )
    const [showPassword, setShowPassword] = useState(false);
    const handlePassword = () => {  
        setShowPassword((password) => !password)
    }
const handleChange = (event) => {
    setformData((formData) => ({
        ...formData,
        [event.target.name]: event.target.value
    }))
}
    return (
        <div className="flex items-center flex-col gap-5 mt-8  ">
            <NavBar />
            <form className="flex items-center flex-col border-1 rounded-2xl mb-4 w-1/4 py-3 " >
                <div className='flex items-center flex-col mt-10 gap-3'>
                    <h2 className="text-2xl text-black-700 font-bold">sign in</h2>
                </div>
                <div>
                    <p className="text-xl text-center font-normal">Access your account</p>
                </div>
                <div className=" w-[90%] flex flex-col gap-2 mt-6 " action="">
                    <div className="relative">
                        <p className="text-md text-gray-700 font-semibold ">Enter your email</p>
                        <input type="email" placeholder='sample@gmail.com' className=" border-2 border-black-700 w-full py-4 px-10  rounded-2xl focus:outline-none focus:border-blue-800"></input>
                        <Mail className="absolute top-10 left-2  text-gray-600 " />
                    </div>
                </div>
                <div className="w-[90%] flex flex-col gap-2 mt-6">
                    <p>Password</p>
                    <div className='relative'>
                        <input value={formData.password} onChange={handleChange} type={showPassword ? "password" : "text"} name="password" placeholder='sample123' className=" border-2 border-gray-700 w-full py-4 px-10 rounded-2xl focus:outline-none focus:border-blue-800"></input>
                        <KeyRound className='absolute top-5 left-2 text-blue-600' />
                        <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                    </div>
                </div>
                <div className="flex gap-2  border-black w-[90%] mt-2 ">
                    <input type="checkbox" name="" id="" ></input>
                    <p>Remember me<span className=" pl-17 text-blue-700 hover:border-b-2 border-blue-600 font-semibold">Forget Password?</span> </p>
                </div>
                <div className='w-[80%]'>
                    <button className="font-semibold  w-full text-white  bg-blue-600 rounded-xl border-1 py-3 px-1 mt-4 cusor-pointer">sign in</button>
                </div>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4 mb-5"></div>
                <p classname="text-grey-700 font-semibold">Dont't have an account?<span className="text-blue-600 font-semibold hover:border-b-2 border-blue-800"> Create one here</span></p>
            </form>
        </div>



    )
}
export default SignIn;