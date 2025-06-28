import logo from '../assets/logo.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";



const Footer = () => {
  return (
    <>
      <div className="bg-[#1C1E53] lg:pt-[100px] pt-8 lg:pb-0 pb-3">
        <div className="lg:w-10/12 w-11/12 mx-auto">
            <div className="lg:flex">
                 <div className="lg:w-6/12">
                   <div className="">
                    <img src={logo} alt="logo" />
                    <p className='lg:pt-[22px] pt-3 text-white text-[16px] font-medium font-pops opacity-[80%] lg:w-[399px]'>We are always open to discuss your project and improve your online presence.</p>
                   </div>
                   <div className="bg-[#FCD980] py-[17px] lg:pl-[37px] pl-3 lg:mt-[80px] mt-4">
                     <div className="flex items-center justify-between lg:justify-start">
                       <div className="">
                         <h4 className='text-[#282938] text-[18px] font-medium font-pops'>Email me at</h4>
                         <p className='text-[#282938] lg:text-[16px] text-[14px] font-normal font-pops opacity-[80%]'>contact@website.com</p>
                       </div>
                      <div className="lg:ml-10">
                         <h4 className='text-[#282938] text-[18px] font-medium font-pops'>Email me at</h4>
                         <p className='text-[#282938] lg:text-[16px] text-[14px] font-normal font-pops opacity-[80%]'>0927 6277 28525</p>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="lg:w-7/12 lg:ml-[60px] lg:mt-0 mt-3">
                  <div className="">
                    <h2 className='text-white lg:text-[48px] text-[30px] font-semibold font-pops'>Lets Talk!</h2>
                  </div>
                  <div className="lg:mt-[80px] mt-3 flex items-center gap-x-4">
                    <FaFacebook className='text-white'/>
                    <FaTwitter className='text-white' />
                    <FaInstagram className='text-white' />
                    <FaLinkedinIn className='text-white' />
                  </div>
                 </div>
            </div>
        </div>
      </div>
      <div className="lg:py-[32px] py-4">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex items-center justify-between">
            <div className="">
              <p className='text-[#282938] text-[16px] font-medium font-pops'>Copyright 2022, Finsweet.com</p>
            </div>
            <div className="lg:flex lg:gap-x-7">
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Home</a>
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>About us</a>
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Features</a>
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Pricing</a>
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>FAQ</a>
                <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Blog</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer