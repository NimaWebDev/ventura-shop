import { useNavigate } from 'react-router-dom'

import logoSearch from '../assets/navbar-logo/logo-search.png'
import logoNav from '../assets/navbar-logo/logo-nav.png'
import { useState } from 'react';

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();
    const handlelogin = ()=>{
        navigate("/login")
    }
    const handleProducts = ()=>{
        navigate('/web-products')
    }
    const handleAbautUs = ()=>{
        navigate('/abaut_us')
    }
    const handleArticles = ()=>{
        navigate('/all_articles')
    }
    const scrollToCategory = ()=>{
        window.scrollTo({top: 700 , behavior: 'smooth'});
    }

    const phoneNumber = "989123456789";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

  return (
    <div dir="rtl" className="container mx-auto mt-5 bg-[#FFFFFF] rounded-4xl max-w-[1224px] w-full h-[60px] px-4">
      <div className="flex items-center justify-between h-full">
        {/* لوگو */}
        <div className="flex items-center whitespace-nowrap">
          <img className="w-[29px] h-[28px]" src={logoNav} alt="logo" />
          <h1 className="font-[Glancyr] font-bold text-3xl pr-5">VENTURA</h1>
        </div>

        {/* دکمه همبرگر موبایل */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* منوی افقی دسکتاپ */}
        <div className="hidden md:flex flex-wrap items-center gap-6 flex-grow justify-center pt-2">
          <p onClick={handleWhatsAppClick} className="animate__animated animate__flash text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 whitespace-nowrap text-[Yekan Bakh FaNum]">تماس با ما</p>
          <p onClick={handleAbautUs} className="animate__animated animate__flash text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 whitespace-nowrap text-[Yekan Bakh FaNum]">درباره ما</p>
          <p onClick={handleArticles} className="animate__animated animate__flash text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 whitespace-nowrap text-[Yekan Bakh FaNum]">مقالات</p>
          <p onClick={handleProducts} className="animate__animated animate__flash text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 whitespace-nowrap text-[Yekan Bakh FaNum]">محصولات</p>
          <p onClick={scrollToCategory} className="animate__animated animate__flash text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 whitespace-nowrap text-[Yekan Bakh FaNum]">دسته بندی</p>
        </div>

        {/* بخش راست: دکمه ورود و آیکون جستجو */}
        <div className="flex items-center gap-2">
          <button onClick={handlelogin} className="animate__animated animate__fadeInTopLeft w-[134px] h-[44px] bg-[#6DA975] rounded-4xl text-white cursor-pointer whitespace-nowrap hidden md:block">ورود / ثبت نام</button>

          <div className="animate__animated animate__fadeInTopLeft bg-[#F5F6F9] w-[44px] h-[44px] rounded-4xl cursor-pointer flex justify-center items-center">
            <img className="w-[24px] h-[24px]" src={logoSearch} alt="logo" />
          </div>
        </div>
      </div>

      {/* منوی موبایل (نمایش وقتی menuOpen=true) */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-[#FFFFFF] rounded-xl p-4 shadow-md space-y-4  mb-50 relative z-10">
          <p onClick={handleWhatsAppClick} className="text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 text-center text-[Yekan Bakh FaNum]">تماس با ما</p>
          <p onClick={handleAbautUs} className="text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 text-center text-[Yekan Bakh FaNum]">درباره ما</p>
          <p onClick={handleArticles} className="text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 text-center text-[Yekan Bakh FaNum]">مقالات</p>
          <p onClick={handleProducts} className="text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 text-center text-[Yekan Bakh FaNum]">محصولات</p>
          <p onClick={scrollToCategory} className="text-[#081035] font-medium hover:underline cursor-pointer hover:text-blue-500 transition-colors duration-250 text-center text-[Yekan Bakh FaNum]">دسته بندی</p>
          <button onClick={handlelogin} className="w-full h-[44px] bg-[#6DA975] rounded-4xl text-white cursor-pointer mt-2">ورود / ثبت نام</button>
        </div>
      )}
    </div>
  );
}
