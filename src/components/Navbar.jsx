import { useState } from 'react';
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {
  let [show,setshow] = useState(false)
  let handleShow = () =>{
    setshow(!show)
    
  }
  return (
    <>
      <div className="bg-red-500 lg:bg-[#1C1E53] lg:py-8 py-6 fixed top-0 left-0 w-full z-999">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex">
             <div className="w-4/12">
              <div className="">
                <img src={logo} alt="logo" />
              </div>
             </div>
             <div className="lg:w-8/12 w-full lg:mt-0 relative ">
              <div className={`lg:flex lg:gap-x-8 lg:justify-end lg:items-center lg:static ${show == true ? '' : 'absolute top-0 right-[1000px]'}`}>
                <Link to={"/"} className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-4'>Home</Link>
                <Link to={"/about"} className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-1'>About us</Link>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-1'>Features</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-1'>Pricing</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-1'>FAQ</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium block lg:mt-0 mt-1'>Blog</a>
                <div className="lg:mt-0 mt-1">
                    <a href="#" className='text-[#BBBBCB] font-pops text-4 font-medium lg:border-2 border-[#F4F6FC] lg:py-4 lg:px-11 rounded-[41px]'>Contact us</a>
                </div>
              </div>
             </div>
             <div className="lg:hidden absolute top-6 right-3" onClick={handleShow}>
              { show? <RxCross2 className='text-[24px] text-white' /> : <FaBars className='text-[24px] text-white'/> }
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar