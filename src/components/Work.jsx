import { FaArrowRightLong } from "react-icons/fa6";
import pointer from '../assets/pointer1.png'
import pointer1 from '../assets/pointer2.png'
import pointer2 from '../assets/pointer3.png'
import pointer3 from '../assets/pointer4.png'

const Work = () => {
  return (
    <>
      <div className="bg-[#F4F6FC] lg:py-[120px] py-[20px]">
        <div className="w-10/12 mx-auto">
          <div className="lg:flex">
                <div className="lg:w-5/12 w-full ">
                    <div className=" lg:text-start">
                    <h2 className="text-[#282938] lg:text-[48px] text-[30px] font-pops font-semibold">How we work</h2>
                    <p className="text-[#282938] text-[16px] font-pops font-[400] opacity-[70%] pt-3 lg:w-[350px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className="lg:mt-4 mt-2 flex items-center">
                    <a href="#" className="text-[#2405F2] text-[18px] font-pops font-medium">Get in touch with us</a><FaArrowRightLong  className="text-[#2405F2] ml-3 mt-1"/>
                    </div>
                    </div>
                </div>
                <div className="lg:w-7/12 w-full lg:mt-0 mt-10">
                    <div className="flex flex-wrap">
                        <div className="lg:w-2/5 w-2/4">
                            <div className="">
                                <img src={pointer} alt=""/>
                                <h3 className="text-[#282938] lg:text-[32px] text-[22px] font-pops font-medium lg:pt-4 pt-2">Strategy</h3>
                                <p className="text-[#282938] lg:text-[16px] text-[13px] font-pops font-normal opacity-[70%] lg:w-[300px] lg:pt-3 pt-2">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                         <div className="lg:w-2/5 w-2/4 lg:ml-10 ">
                            <div className=" lg:text-start">
                                <div className="text-end">
                                <img src={pointer1} alt="" className=""/>
                                </div>
                                <h3 className="text-[#282938] lg:text-[32px] text-[22px] font-pops font-medium lg:pt-4 pt-2">Wireframing</h3>
                                <p className="text-[#282938] lg:text-[16px] text-[13px] font-pops font-normal opacity-[70%] lg:w-[300px] lg:pt-3 pt-2">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                         <div className="lg:w-2/5 w-2/4 lg:mt-11 mt-4">
                            <div className="">
                                <img src={pointer2} alt=""/>
                                <h3 className="text-[#282938] lg:text-[32px] text-[22px] font-pops font-medium lg:pt-4 pt-2">Design</h3>
                                <p className="text-[#282938] lg:text-[16px] text-[13px] font-pops font-normal opacity-[70%] lg:w-[300px] lg:pt-3 pt-2">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                         <div className="lg:w-2/5 w-2/4 lg:ml-10  lg:mt-11 mt-4">
                            <div className=" lg:text-start">
                                <div className="text-end">
                                <img src={pointer3} alt="" className=""/>
                                </div>
                                <h3 className="text-[#282938] lg:text-[32px] text-[22px] font-pops font-medium lg:pt-4 pt-2">Development</h3>
                                <p className="text-[#282938] lg:text-[16px] text-[13px] font-pops font-normal opacity-[70%] lg:w-[300px] lg:pt-3 pt-2">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work