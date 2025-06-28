import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import { FaArrowRightLong } from "react-icons/fa6";


const Blog = () => {
  return (
    <>
     <div className="lg:py-[80px] py-3">
        <div className="lg:w-10/12 w-11/12 mx-auto">
          <div className="">
            <h2 className="text-[#282938] lg:text-[48px] text-[28px] font-semibold font-pops">Our blog</h2>
          </div>
          <div className="lg:flex lg:mt-[60px] mt-[30px] lg:gap-x-8">
            <div className="lg:w-1/3 w-full">
              <div className="lg:mt-0 ">
                <img src={blog1} alt="blog1" />
                <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="flex items-center lg:pt-8 pt-3">
                    <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                    <FaArrowRightLong className=' text-[16px] ml-3' />
                </div>
              </div>
            </div>
              <div className="lg:w-1/3 w-full">
              <div className="lg:mt-0 mt-7">
                <img src={blog2} alt="blog1" />
                <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="flex items-center lg:pt-8 pt-3">
                    <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                    <FaArrowRightLong className=' text-[16px] ml-3' />
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="lg:mt-0 mt-7">
                <img src={blog3} alt="blog1" />
                <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                <div className="flex items-center lg:pt-8 pt-3">
                    <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                    <FaArrowRightLong className=' text-[16px] ml-3' />
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </>
  )
}

export default Blog