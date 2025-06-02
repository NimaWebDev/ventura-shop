import { useEffect, useState } from 'react'
import { supabase } from '../api/supabaseClient'
import { useNavigate } from 'react-router-dom'

import logoTop from '../assets/logo-dashboard/logo-top.png'
import logoShop from '../assets/logo-dashboard/icons8-shop-24.png'
import logoCard from '../assets/logo-dashboard/icons8-card-50.png'
import logoHelp from '../assets/logo-dashboard/logo-help.png'
import logoOut from '../assets/logo-dashboard/icons8-export-50.png'

export default function Dashboard() {
  const [userInfo, setUserInfo] = useState<{ first_name: string; last_name: string } | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true)
      setError(null)

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()

      if (userError || !user) {
        setError('کاربر یافت نشد یا وارد نشده‌اید.')
        setLoading(false)
        return
      }

      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('first_name, last_name')
        .eq('id', user.id)
        .single()

      if (profileError) {
        setError('مشکلی در دریافت اطلاعات رخ داد.')
      } else {
        setUserInfo(profile)
      }

      setLoading(false)
    }

    fetchUserProfile()
  }, [])

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert('خطا در خروج: ' + error.message)
    } else {
      setUserInfo(null)      // پاک کردن اطلاعات کاربر
      navigate('/login')    
    }
  }

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>
  if (error) return <p className="text-center font-bold text-red-500 mt-10">{error}</p>

  const handleCart = ()=>{
    navigate('/cart')
  }
  const pay = ()=>{
    navigate('/pay_cart')
  }

    const phoneNumber = "989123456789";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}`;
        window.open(url, '_blank');
    };

  return (
    <div dir='rtl' className='lg:flex justify-center items-center'>
        <div className='flex lg:block justify-center items-center text-center w-[100%] lg:w-[306px] h-[150px] lg:h-[780px] bg-white mt-20 lg:border-l lg:border-black'>
            <div className='flex mr-10 lg:pt-10 gap-2 text-center items-center'>
                <img src={logoTop} alt="" className='w-[30px] h-[30px]' mr-5/>
                <h1 className='text-[#081035] font-bold'>داشبورد</h1>
            </div>
        <button
          className="md:hidden flex flex-col justify-center items-center mr-5 w-8 h-8 space-y-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
            <div onClick={handleCart} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoShop} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>سبد خرید</h2>
            </div>
            <div onClick={pay} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-10 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoCard} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>تسویه حساب</h2>
            </div>
            <div onClick={handleWhatsAppClick} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-10 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoHelp} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>نیاز به کمک دارید ؟</h2>
            </div>
            <div onClick={handleSignOut} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-10 gap-2 text-center transition-all transition-discrete hover:bg-red-700 cursor-pointer'>
                <img src={logoOut} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>خروج از حساب</h2>
            </div>
        </div>
        {menuOpen && (
        <div className="md:hidden mt-2 bg-[#FFFFFF] rounded-xl p-4 shadow-md space-y-4 relative z-10 text-center">
          <h2 onClick={handleCart} className='text-[#081035] font-bold cursor-pointer underline'>سبد خرید</h2>
          <h2 onClick={pay} className='text-[#081035] font-bold cursor-pointer underline'>تسویه حساب</h2>
          <h2 onClick={handleWhatsAppClick} className='text-[#081035] font-bold cursor-pointer underline'>نیاز به کمک دارید ؟</h2>
          <h2 onClick={handleSignOut} className='text-[#081035] font-bold cursor-pointer underline'>خروج از حساب</h2>
        </div>
      )}
        <div className='w-[350px] md:w-[968px] h-[200px] md:h-[780px] ml-auto mr-auto lg:ml-0 lg:mr-0 mt-10 lg:mt-20 bg-white flex justify-center items-center gap-5'>
            <div className='w-[400px] md:h-[400px] bg-white text-center'>
                <h2 className='lg:text-4xl text-[#081035]'>نام :</h2>
                <h2 className='lg:text-3xl text-[#081035] font-bold mt-10'>{userInfo?.first_name}</h2>
            </div>
            <div className='w-[400px] md:h-[400px] bg-white text-center'>
                <h2 className='lg:text-4xl text-[#081035]'>نام خانوادگی :</h2>
                <h2 className='lg:text-3xl text-[#081035] font-bold mt-10'>{userInfo?.last_name}</h2>
            </div>
        </div>
    </div>
  )
}
