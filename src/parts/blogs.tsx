import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import imageMain from '../assets/image-blogs/image-main-blogs.png'
import imageBlog1 from '../assets/image-blogs/image-1-blogs.png'
import imageBlog2 from '../assets/image-blogs/image-2-blogs.png'
import logoFlash from '../assets/logo-blogs/logo-flash.png'
import logoClock from '../assets/logo-blogs/logo-clock.png'
import logoFlashbtn from '../assets/logo-bestProduct/logo-flash.png'

export default function Blogs() {

    const navigate = useNavigate();

    const handleArticles = ()=>{
        navigate("/all_articles")
    }

  return (
<div className='mt-30 px-4 md:px-0'>
  <h1
    data-aos="fade-down"
    className='text-center text-[28px] md:text-[34px] text-[#081035] font-bold m-5 mr-0 md:mr-15'
  >
    لایف هک و نکات کمپینگ
  </h1>

  <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20'>

    <div data-aos="fade-right" className='flex flex-col items-center md:items-start'>
      <Link to={'/articles/winter-camping-tips'}>
        <div className='w-full max-w-[391px] h-[80px] border border-[#CFD2E3] rounded-4xl flex justify-center items-center mt-5 px-4'>
          <img
            src={logoFlash}
            alt="logo"
            className='w-[48px] md:w-[58px] h-[48px] md:h-[58px] mr-10 md:mr-20 cursor-pointer'
          />
          <p className='text-right pr-3 md:pr-5 text-[#081035] font-bold text-sm md:text-base'>
            نکات مهم کمپینگ در فصل زمستان
          </p>
        </div>
      </Link>

      <Link to={'/articles/best-ecocamps-iran'}>
        <div className='w-full max-w-[391px] h-[80px] border border-[#CFD2E3] rounded-4xl flex justify-center items-center mt-5 px-4'>
          <img
            src={logoFlash}
            alt="logo"
            className='w-[48px] md:w-[58px] h-[48px] md:h-[58px] mr-10 md:mr-20 cursor-pointer'
          />
          <p className='text-right pr-3 md:pr-5 text-[#081035] font-bold text-sm md:text-base'>
            معرفی بهترین اکوکمپ های ایران
          </p>
        </div>
      </Link>

      <Link to={'/articles/camping-tent-buying-guide'}>
        <div className='w-full max-w-[391px] h-[80px] border border-[#CFD2E3] rounded-4xl flex justify-center items-center mt-5 px-4'>
          <img
            src={logoFlash}
            alt="logo"
            className='w-[48px] md:w-[58px] h-[48px] md:h-[58px] mr-10 md:mr-20 cursor-pointer'
          />
          <p className='text-right pr-3 md:pr-5 text-[#081035] font-bold text-sm md:text-base'>
            راهنمای خرید بهترین چادر کمپینگ
          </p>
        </div>
      </Link>

      <Link to={'/articles/headlamp-rechargeable-vs-battery'}>
        <div className='w-full max-w-[391px] h-[80px] border border-[#CFD2E3] rounded-4xl flex justify-center items-center mt-5 px-4'>
          <img
            src={logoFlash}
            alt="logo"
            className='w-[48px] md:w-[58px] h-[48px] md:h-[58px] mr-10 md:mr-20 cursor-pointer'
          />
          <p className='text-right pr-3 md:pr-5 text-[#081035] font-bold text-sm md:text-base'>
            تفاوت های هدلایت شارژی و باتری خور
          </p>
        </div>
      </Link>
    </div>

    <Link to={'/articles/camping-gear-checklist'}>
      <div className='mt-8 md:mt-0'>
        <img
          data-aos="fade-down"
          src={imageMain}
          alt="image-main"
          className='cursor-pointer drop-shadow-[0_15px_15px_#6DA975] max-w-full h-auto'
        />
      </div>
    </Link>

    <div className='flex flex-col md:flex-col items-center md:items-start gap-5 mt-8 md:mt-0'>
      <div
        data-aos="fade-down-left"
        dir='rtl'
        className='w-full max-w-[420px] h-[180px] border border-[#CFD2E3] rounded-4xl flex'
      >
        <img
          src={imageBlog1}
          alt="image"
          className='w-[100px] md:w-[132px] h-[100px] md:h-[132px] mt-5 mr-3 object-cover'
        />
        <Link to={'/articles/camping-gear-checklist'}>
          <div className='cursor-pointer flex flex-col justify-between py-4 pr-5'>
            <div className='w-[68px] h-[24px] bg-[#ECFAEE] rounded-4xl'>
              <p className='text-[#6DA975] text-[12px] text-center leading-6'>دسته بندی</p>
            </div>
            <p className='text-[#081035] font-bold text-[14px] md:text-[16px] text-wrap mt-2 max-w-[250px]'>
              چک لیست لوازم مهم و ضرروریبرای کمپینگ و سفر
            </p>
            <div className='flex items-center mt-3'>
              <img src={logoClock} alt="logo" className='w-5 h-5' />
              <p className='mr-2 text-sm'>زمان مطالعه : 5 دقیقه</p>
            </div>
          </div>
        </Link>
      </div>

      <Link to={'/articles/camping-coffee-brewing'}>
        <div
          data-aos="fade-up-left"
          dir='rtl'
          className='w-full max-w-[420px] h-[180px] border border-[#CFD2E3] rounded-4xl flex'
        >
          <img
            src={imageBlog2}
            alt="image"
            className='w-[100px] md:w-[132px] h-[100px] md:h-[132px] mt-5 mr-3 object-cover'
          />
          <div className='cursor-pointer flex flex-col justify-between py-4 pr-5'>
            <div className='w-[68px] h-[24px] bg-[#ECFAEE] rounded-4xl'>
              <p className='text-[#6DA975] text-[12px] text-center leading-6'>دسته بندی</p>
            </div>
            <p className='text-[#081035] font-bold text-[14px] md:text-[16px] text-wrap mt-2 max-w-[250px]'>
              بهترین روش های درست کردنقهوه در کمپینگ
            </p>
            <div className='flex items-center mt-3'>
              <img src={logoClock} alt="logo" className='w-5 h-5' />
              <p className='mr-2 text-sm'>زمان مطالعه : 5 دقیقه</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  </div>

  <button
    onClick={handleArticles}
    dir='ltr'
    className='w-[154px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl flex items-center gap-1 cursor-pointer mx-auto mt-10'
  >
    <img className='pl-5' src={logoFlashbtn} alt="logo" />
    مشاهده بیشتر
  </button>
</div>

  )
}
