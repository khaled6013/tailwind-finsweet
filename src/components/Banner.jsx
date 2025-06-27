import bannerimg from '../assets/banner.png'

const Banner = () => {
    return (
        <>
            <div className="bg-[#1C1E53] py-[120px]">
                <div className="w-10/12 mx-auto">
                    <div className="flex">
                        <div className="w-1/2">
                            <div className="">
                                <h2 className='text-white text-[54px] font-pops font-semibold w-[582px] leading-[74px]'>Building stellar websites for early startups</h2>
                                <p className='text-white text-[16px] font-pops font-medium pt-6 w-[562px] opacity-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div className="mt-[48px]">
                                    <a href="#" className='text-black text-[18px] font-pops font-semibold py-4 px-[54px] rounded-[41px] bg-[#FCD980]'>View our work</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="">
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