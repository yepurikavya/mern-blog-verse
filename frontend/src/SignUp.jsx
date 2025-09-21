import react from 'react';
import NavBar from "./NavBar"
import { CircleUserRound } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { User } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react";
const SignUp = () => {
    const [formData, setformData] = useState(
        {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    )
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = {}
        if (!formData.fullName) {
            newErrors.fullName = "please enter your fullname"
        }
        if (!formData.email) {
            newErrors.email = "please enter your  email"
        }
        if (!formData.password) {
            newErrors.password = "please enter your password"
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "please confirm your password" 
        }
        else if(formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "your password did not match"
        }
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
    }
    else {
        setSuccess("successfully your account is created")
        setformData({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""

        })
    }
}
    // if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
    //     setError("please fill  all the above fields")
    // } else if (formData.password !== formData.confirmPassword) {
    //     setError("your password did not match")
    // }
    // else {
    //     setSuccess("successfully your account is created")
    //     setError("")
    //     setformData({
    //         fullName: "",
    //         email: "",
    //         password: "",
    //         confirmPassword: ""

    //     })
    // }


const handlePassword = () => {
    setShowPassword((password) => !password)
}
const handleConfirmPassword = () => {
    setShowConfirmPassword((password) => !password)
}
const handleChange = (event) => {
    setError("")
    setSuccess("")
    setformData((formData) => ({
        ...formData,
        [event.target.name]: event.target.value
    }))
     setErrors((errors) => ({
        ...errors,
        [event.target.name]: ""
    }))
}
return (
    <div className="flex items-center flex-col gap-5 pb-3">
        <NavBar />
        <h2 className="text-3xl text-blue-600 font-bold">join-Blogverse</h2>
        <p className=" text-xl  text-gray-500 font-medium mt-2 mb-2 ">create your account and start your blogging journey today </p>
        <form onSubmit={handleSubmit} className=" flex flex-col border-1 border-black lg:w-1/3 py-7 sm:w-[50%] w-[90%] items-center rounded-2xl " action="">
            <div className="w-[90%] flex flex-col gap-2">
                <p>Full name</p>
                <div className='relative'>
                    <input value={formData.fullName} onChange={handleChange} type="text" name="fullName" placeholder='Enter Your Fullname' className=" border-1 border-gray-700 w-full py-4 px-3 rounded-2xl focus:outline-none focus:border-purple pl-10"></input>
                    <User className="absolute top-5 left-2 text-gray-600" />
                </div>
                {errors.fullName && <p className="text-red-600">{errors.fullName}</p>}
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p>Email</p>
                <div className='relative'>
                    <input value={formData.email} onChange={handleChange} type="email" name="email" placeholder='Enter Your Email' className=" border-1 border-gray-700 w-full py-4 px-3 pl-10 rounded-2xl focus:outline-none focus:border-purple-500"></input>
                    <Mail className="absolute top-5 left-2 text-gray-600 " />
                </div>
                {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p>Password</p>
                <div className='relative'>
                    <input value={formData.password} onChange={handleChange} type={showPassword ? "password" : "text"} name="password" placeholder='Enter Your Password' className=" border-1 border-gray-700 w-full py-4 px-3 pl-10 rounded-2xl focus:outline-none focus:border-purple-500"></input>
                    <KeyRound className='absolute top-5 left-2 text-blue-600' />
                    <p onClick={handlePassword}>{showPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                </div>
                {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>
            <div className="w-[90%] flex flex-col gap-2">
                <p>Confirm password</p>
                <div className="relative">
                    <input value={formData.confirmPassword} onChange={handleChange} type={showConfirmPassword ? "password" : "text"} name="confirmPassword" placeholder='Confirm Your Password' className=" border-1 border-gray-700 w-full py-4 px-3 pl-10 rounded-2xl focus:outline-none focus:border-purple-500"></input>
                    <KeyRound className='absolute top-5 left-2 text-blue-600' />
                    <p onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className="absolute right-3 top-4" /> : <EyeOff className="absolute right-3 top-4" />}</p>
                </div>
                {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword}</p>}
            </div>
            <div className="flex gap-2 border-1  border-black w-[90%] mt-5 py-5 px-4 rounded-xl items-center justify-center ">
                <input type="checkbox" name="" id="" ></input>
                <p>I agree with your terms of services and privacy policy</p>
            </div>
            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-700">{success}</p>}
            <div className="w-[90%] ">
                <button type="submit" className="font-semibold w-full text-white  bg-purple-700 rounded-xl border-1 py-3 px-1 mt-4 cusor-pointer relative "><CircleUserRound className="  absolute w-7 h-7 flex justify-around" /><p className="flex justify-center mb-3 ">create account</p></button>
            </div>
            <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
            <div className="w[90%]">
                <p className="text-grey-700 font-semibold">Aready have an account?<span className="text-purple-600 cursor pointer"> sign in here</span></p>
            </div>
            <button className="text-grey-700 font-semibold hover:bg-gray-200 py-4 w-[90%] rounded-xl cursour-pointer">back to home</button>

        </form>
    </div>
)
}
export default SignUp;