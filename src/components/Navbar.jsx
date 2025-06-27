import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
      <div className="bg-[#1C1E53] py-8 fixed top-0 left-0 w-full z-999">
        <div className="w-10/12 mx-auto">
          <div className="flex">
             <div className="w-4/12">
              <div className="">
                <img src={logo} alt="logo" />
              </div>
             </div>
             <div className="w-8/12">
              <div className="flex gap-x-8 justify-end items-center">
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium'>Home</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium'>About us</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium'>Features</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium'>Pricing</a>
                <a href="#" className='text-[#BBBBCB] font-pops text-[16px] font-medium'>FAQ</a>
                <a href="#" className='text-[#BBBBCB] hover:text-[#00000] font-pops text-[16px] font-medium'>Blog</a>
                <div className="">
                    <a href="#" className='text-[#BBBBCB] font-pops text-4 font-medium border-2 border-[#F4F6FC] py-4 px-11 rounded-[41px]'>Contact us</a>
                </div>
              </div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar