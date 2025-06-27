import { FaArrowRightLong } from "react-icons/fa6";
import pointer from '../assets/pointer1.png'
import pointer1 from '../assets/pointer2.png'
import pointer2 from '../assets/pointer3.png'
import pointer3 from '../assets/pointer4.png'

const Work = () => {
  return (
    <>
      <div className="bg-[#F4F6FC] py-[120px]">
        <div className="w-10/12 mx-auto">
          <div className="flex">
                <div className="w-5/12">
                    <div className="">
                    <h2 className="text-[#282938] text-[48px] font-pops font-semibold">How we work</h2>
                    <p className="text-[#282938] text-[16px] font-pops font-[400] opacity-[70%] pt-3 w-[320px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <div className="mt-4 flex items-center">
                    <a href="#" className="text-[#2405F2] text-[18px] font-pops font-medium">Get in touch with us</a><FaArrowRightLong  className="text-[#2405F2] ml-3 mt-1"/>
                    </div>
                    </div>
                </div>
                <div className="w-7/12">
                    <div className="flex flex-wrap">
                        <div className="w-2/5">
                            <div className="">
                                <img src={pointer} alt="" />
                                <h3 className="text-[#282938] text-[32px] font-pops font-medium pt-4">Strategy</h3>
                                <p className="text-[#282938] text-[16px] font-pops font-normal opacity-[70%] w-[250px] pt-3">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                        <div className="w-3/5">
                           <div className="">
                                <img src={pointer1} alt="" />
                                <h3 className="text-[#282938] text-[32px] font-pops font-medium pt-4">Wireframing</h3>
                                <p className="text-[#282938] text-[16px] font-pops font-normal opacity-[70%] w-[250px] pt-3">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                        <div className="w-2/5 mt-[48px]">
                           <div className="">
                                <img src={pointer2} alt="" />
                                <h3 className="text-[#282938] text-[32px] font-pops font-medium pt-4">Design</h3>
                                <p className="text-[#282938] text-[16px] font-pops font-normal opacity-[70%] w-[250px] pt-3">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                        <div className="w-3/5 mt-[48px]">
                           <div className="">
                                <img src={pointer3} alt="" />
                                <h3 className="text-[#282938] text-[32px] font-pops font-medium pt-4">Development</h3>
                                <p className="text-[#282938] text-[16px] font-pops font-normal opacity-[70%] w-[250px] pt-3">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
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