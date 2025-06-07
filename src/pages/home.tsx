import { useNavigate } from 'react-router-dom'

import imageHome from '../assets/image-home/image-home-removebg-preview.png'
import logoFlash from '../assets/logo-home/logo-home.png'
import imageRight from '../assets/image-home/image-right.png'
import imageLeft from '../assets/image-home/Group 1261152899image-left.png'

import Category from '../parts/category'
import OffProducts from '../parts/offProducts'
import { BestProducts } from '../parts/bestProducts'
import Brands from '../parts/brands'
import Blogs from '../parts/blogs'

 function Home() {

    const navigate = useNavigate();

    const handleProducts = ()=>{
        navigate('/web-products')
    }

  return (
    <>
        <div className='container max-w-full mt-15 relative bg-[#F5F6F9]'>
            <h1 className='animate__animated animate__backInDown text-center text-2xl sm:text-4xl font-bold text-[#081035]'>! سفرت رو بچین، <span className='text-[#6DA975]'>وسایلش</span> رو داریم</h1>
            <button onClick={handleProducts} className='animate__animated animate__backInUp w-[170px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl flex items-center gap-1 cursor-pointer ml-auto mr-auto mt-10'><img className='pl-2' src={logoFlash} alt="logo" />مشاهده محصولات</button>
            <div className='container flex max-w-full items-center justify-center'>
                <img className='hidden lg:block h-[150px] absolute mr-220 mb-50' src={imageLeft} alt="image" />
                <img className=' w-screen h-[300px] sm:w-[1126px] sm:h-[500px] ml-20 mt-20 drop-shadow-[0_16px_16px_rgba(0,0,0,1)]' src={imageHome} alt="image" />
                <img className='hidden lg:block h-[150px] absolute lg:ml-190 mt-20' src={imageRight} alt="image" />
            </div>
            <svg className="absolute bottom-0 left-0 w-full h-[40px] " viewBox="0 0 100 40" preserveAspectRatio="none">
                <path d="M0 0 L45 35 L50 40 L55 35 L100 0" stroke="black" strokeWidth="1" fill="none" />
            </svg>
        </div>
        <Category />
        <OffProducts />
        <BestProducts />
        <Brands />
        <Blogs />
    </>
  )
}

export default Home;
