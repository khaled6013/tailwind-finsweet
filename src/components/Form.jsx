import formImg from '../assets/formImg.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Form = () => {
  return (
    <>
      <div className="lg:py-[100px] py-[30px]">
        <div className="lg:w-10/12 w-11/12 mx-auto">
         <div className="lg:flex">
            <div className="lg:w-1/2">
              <div className="relative">
                <img src={formImg} alt="" className='w-full'/>
                <div className="absolute lg:top-[90px] top-[65px] lg:left-[90px] left-6 z-3">
                    <h2 className='text-white lg:text-[54px] text-[30px] font-semibold font-pops lg:w-[464px]'>Building stellar websites for early startups</h2>
                    <p className='text-white text-[16px] lg:font-medium font-pops lg:pt-[24px] pt-8 lg:w-[464px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                </div>
                <div className="absolute top-0 left-0 h-[100%] w-[100%] bg-[#1c1e534c]"></div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full bg-[#1C1E53]">
             <div className="lg:mt-[90px] lg:pt-0 pt-6 lg:pl-0 pl-7 lg:ml-[90px]">
                <h3 className='text-white lg:text-[32px] font-medium font-pops '>Send inquiry</h3>
                <p className='text-[#F4F6FC] lg:text-[16px] text-[13px] lg:font-medium font-pops lg:w-[432px] lg:pt-[16px] pt-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <div className="lg:mt-[40px] mt-4">
                    <form action="">
                        <input type="text" placeholder='Your Name' className='border-1 border-[#ffffff54] pt-[17px] pb-[16px] pl-[32px] lg:pr-[200px] pr-[90px] rounded-[8px] placeholder-[#F4F6FC] opacity-[50%] text-white '/>
                        <input type="Email" placeholder='Email' className='border-1 border-[#ffffff54] pt-[17px] pb-[16px] pl-[32px] lg:pr-[200px] pr-[90px] rounded-[8px] mt-4 placeholder-[#F4F6FC] opacity-[50%] text-white '/>
                        <input type="text" placeholder='Paste your Figma design URL' className='border-1 border-[#ffffff54] pt-[17px] pb-[16px] pl-[32px] lg:pr-[200px] pr-[90px] rounded-[8px] mt-4 placeholder-[#F4F6FC] opacity-[50%] text-white'/>
                       <div className="lg:mt-11 mt-8 lg:ml-3">
                         <a href="#" className='text-black lg:text-[18px] font-semibold font-pops lg:py-[16px] py-[12px] px-[60px] lg:px-[130px] bg-[#FCD980] rounded-[40px]'>Send an Inquiry</a>
                       </div>
                       <div className="flex items-center lg:mt-10 mt-7 lg:justify-center lg:mr-11">
                         <a href="#" className='text-white lg:text-[18px] text-[13px] font-medium font-pops pr-4'>Get in touch with us</a>
                         <FaArrowRightLong className='text-white lg:text-[18px] text-[13px]'/>
                       </div>
                    </form>
                </div>
             </div>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Form