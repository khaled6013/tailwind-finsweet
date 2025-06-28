import jenny from '../assets/jenny.png'

const Clients = () => {
    return (
        <>
            <div className="bg-[#F4F6FC] lg:py-[120px] py-[35px]">
                <div className="lg:w-10/12 w-11/12 mx-auto">
                    <div className="lg:flex">
                        <div className="lg:w-2/6 w-full">
                            <div className="">
                                <h2 className='text-[#282938] lg:text-[38px] font-semibold font-pops lg:w-[327px]'>What our clients say about us</h2>
                                <p className='text-[#282938] text-[16px] font-normal font-pops lg:pt-[16px] opacity-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                            </div>
                        </div>
                        <div className="lg:w-4/6 w-full">
                            <div className="lg:mt-0 mt-6">
                                <h2 className='text-[#282938] lg:text-[32px] font-medium font-pops'>"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."</h2>
                                <div className="flex items-center lg:mt-[40px] mt-5">
                                    <img src={jenny} alt="" />
                                    <div className="lg:ml-[14px] ml-3">
                                        <p className='text-[#282938] text-[18px] font-medium font-pops'>Jenny Wilson</p>
                                        <p className='text-[#282938] text-[12px] font-medium font-pops'>Vice President</p>
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

export default Clients