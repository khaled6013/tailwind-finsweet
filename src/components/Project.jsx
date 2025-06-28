import { FaArrowRightLong } from "react-icons/fa6";
import card from '../assets/card.png'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
const Project = () => {
    return (
        <>
            <div className="lg:py-[120px] py-[30px]">
                <div className="w-10/12 mx-auto">
                    <div className="lg:flex items-center lg:justify-between">
                        <h1 className="text-[#282938] lg:text-[48px] text-[22px] font-pops lg:font-[600] font-[500]">View our projects</h1>
                        <div className="flex items-center">
                            <a href="#" className="text-[#282938] text-[16px] font-pops font-[500] pr-2">View More</a>
                            <FaArrowRightLong className="mt-1" />
                        </div>
                    </div>
                    <div className="lg:flex lg:mt-[60px] mt-[20px]">
                        <div className="lg:w-7.5/12">
                            <div className="relative">
                                <img src={card} alt="card" className="w-[98%] " />
                                <div className="absolute top-0 left-0 bg-[#1C1E536B] lg:w-[50%] w-[70%] h-[100%] hover:w-[100%]">
                                    <div className="absolute lg:top-[300px] lg:left-[48px] top-8 left-4 ">
                                        <h2 className="text-white lg:text-[24px] text-[16px] font-pops font-[600] lg:w-[313px]">Workhub office Webflow Webflow Design</h2>
                                        <div className="flex items-center lg:mt-[100px] mt-5">
                                            <a href="#" className="text-[#FCD980] lg:text-[16px] text-[13px] font-pops font-[500]">View project</a>
                                            <FaArrowRightLong className="mt-0 ml-2 text-[#FCD980]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-4.5/12 lg:mt-0 mt-4 ">
                            <div className="relative flex lg:block">
                                <div className="relative">
                                    <div className="">
                                    <img src={card2} alt="card2"/>
                                </div>
                                <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-[#1C1E536B]">
                                    <div className="flex items-center lg:ml-[55px] ml-4 lg:mt-[210px] mt-11">
                                    <a href="#" className="text-[#FCD980] lg:text-[16px] text-[12px] font-pops font-[500]">View project</a>
                                    <FaArrowRightLong className="mt-0 ml-2 text-[#FCD980]" />
                                    </div>
                                </div>
                                </div>
                                <div className="">
                                    <img src={card1} alt="" className=" pt-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project