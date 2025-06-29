import whoAre from '../assets/whoAre.png'

const WhoAre = () => {
  return (
    <>
     <div className="pb-8">
        <div className="lg:w-10/12 w-11/12 mx-auto bg-[#F4F5F5] lg:pt-[75px] lg:pl-[75px] lg:pb-[75px]">
          <div className="lg:flex">
            <div className="lg:w-6/12 w-full">
              <div className="">
               <p className="text-[#282938] text[16px] font-medium font-pops ">Who we are</p>
               <h3 className="text-[#282938] lg:text-[36px] font-semibold font-pops ">Goal focussed</h3>
               <p className="text-[#282938] text-[12px] font-normal font-pops opacity-[70%] lg:w-[384px] pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="lg:w-6/12 w-full">
              <div className="">
                <h3 className="text-[#282938] lg:text-[36px] font-semibold font-pops ">Continuous improvement</h3>
                 <p className="text-[#282938] text-[12px] font-normal font-pops opacity-[70%] lg:w-[384px] pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-10/12 w-11/12 mx-auto">
           <div className="w-full">
            <div className="">
                <img src={whoAre} alt="" />
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default WhoAre