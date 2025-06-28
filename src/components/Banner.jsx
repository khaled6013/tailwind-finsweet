import bannerimg from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className="bg-[#1C1E53] lg:pt-[150px] lg:pb-[120px] pt-[100px] pb-[50px]">
                <div className="w-10/12 mx-auto">
                    <div className="lg:flex">
                        <div className="lg:w-1/2 w-full">
                            <div className="">
                                <h2 className='text-white lg:text-[54px] text-[34px] font-pops font-semibold lg:w-[582px] lg:leading-[74px] leading-11'>Building stellar websites for early startups</h2>
                                <p className='text-white text-[16px] font-pops font-medium lg:pt-6 pt-3 lg:w-[562px] opacity-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div className="lg:mt-[48px] mt-[25px] lg:text-start">
                                    <a href="#" className='text-black lg:text-[18px] text-[15px] font-pops font-semibold lg:py-4 py-2 lg:px-[54px] px-[30px] rounded-[41px] bg-[#FCD980]'>View our work</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full hidden lg:block">
                            <div className="lg:">
                                <img src={bannerimg} alt="bannerImg" className='w-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner