import aboutImg from '../assets/aboutImg.png'

const AboutHero = () => {
  return (
    <>
      <div className="lg:pt-[160px] lg:pb-[90px] pt-[90px] pb-11">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="lg:flex">
            <div className="lg:w-8/12 w-full">
              <div className="">
                <p className='text-[#282938] text-[18px] font-medium font-pops'>About us</p>
                <h2 className='text-[#282938] lg:text-[58px] text-[30px] font-semibold font-pops lg:leading-[74px] '>Our designs solve problems</h2>
                <p className='text-[#282938] lg:text-[16px] text-[13px] font-normal font-pops opacity-[70%] lg:w-[484px] lg:pt-[24px] pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
            <div className="lg:w-4/12 w-full">
              <div className="lg:mt-0 mt-3">
                <img src={aboutImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutHero