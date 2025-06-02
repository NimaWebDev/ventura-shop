import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"
import { useNavigate } from "react-router-dom"

import logoTop from '../assets/logo-dashboard/logo-top.png'
import logoUsers from '../assets/logo-panelAdmin/icons8-users-30.png'
import logoShops from '../assets/logo-panelAdmin/icons8-shop-64.png'
import logoCart from '../assets/logo-panelAdmin/icons8-cart-24.png'
import logoBooks from '../assets/logo-panelAdmin/icons8-books-50.png'
import logoAdmins from '../assets/logo-panelAdmin/icons8-admin-50.png'
import logoCountUsers from '../assets/logo-panelAdmin/Group 10useers.png'

interface User {
  id: string
  first_name: string
  last_name: string
  email: string
}

export default function PanelAdmin() {
  const [users, setUsers] = useState<User[]>([])
  const [, setError] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleShops = ()=>{
    navigate('/purchasesPage')
  }
  const addProduct = ()=>{
    navigate('/add_Product')
  }
  const addArticle = ()=>{
    navigate("/add_Article")
  }

  const fetchProfiles = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, first_name, last_name, email')

    if (error) {
      console.error('Error fetching profiles:', error)
      setError('مشکلی در دریافت اطلاعات رخ داد.')
    } else {
      setUsers(data)
    }
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  return (
    <div dir="rtl" className="lg:flex justify-center items-center">
        <div className='flex lg:block justify-center items-center text-center w-[100%] lg:w-[306px] h-[150px] lg:h-[780px] bg-white mt-20 lg:border-l lg:border-black'>
            <div className='flex mr-10 lg:pt-10 gap-2 text-center items-center'>
                <img src={logoTop} alt="" className='w-[30px] h-[30px]' mr-5/>
                <h1 className='text-[#081035] font-bold'>پنل ادمین</h1>
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
            <div className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoUsers} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>کاربر ها </h2>
            </div>
            <div onClick={handleShops} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoShops} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>خرید ها</h2>
            </div>
            <div onClick={addProduct} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoCart} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>افزودن محصول</h2>
            </div>
            <div onClick={addArticle} className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-[#5932EA] cursor-pointer'>
                <img src={logoBooks} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>افزودن مقاله</h2>
            </div>
            <div className='hidden md:flex w-[250px] h-[46px] items-center rounded-2xl mr-10 lg:mt-20 gap-2 text-center transition-all transition-discrete hover:bg-green-700 cursor-pointer'>
                <img src={logoAdmins} alt="" className='w-[30px] h-[30px] mr-5'/>
                <h2 className='text-[#081035] font-bold transition-all transition-discrete hover:text-white'>ادمین ها</h2>
            </div>
        </div>
        {menuOpen && (
        <div className="md:hidden mt-2 bg-[#FFFFFF] rounded-xl p-4 shadow-md space-y-4 relative z-10 text-center">
          <h2 onClick={handleShops} className='text-[#081035] font-bold cursor-pointer underline'>خرید ها</h2>
          <h2 onClick={addProduct} className='text-[#081035] font-bold cursor-pointer underline'>اضافه کردن محصول</h2>
          <h2 onClick={addArticle} className='text-[#081035] font-bold cursor-pointer underline'>اضافه کردن مقاله</h2>
          <h2 className='text-[#081035] font-bold cursor-pointer underline'>ادمین ها</h2>
        </div>
      )}
        <div className="w-screen h-auto lg:w-[968px] lg:h-[780px] mt-10 lg:mt-20 bg-white">
            <header>
                <h1 className="text-center p-8 text-[#081035] text-2xl font-bold">کاربر ها </h1>
                <div className="w-[400px] ml-auto mr-auto p-5 flex justify-center items-center text-center gap-5 lg:border-r lg:border-l border-black">
                    <img src={logoCountUsers} alt="" className="w-[42px] h-[42px]"/>
                    <h2 className="text-xl text-[#081035] font-bold">تعداد کاربران :</h2>
                    <p className="text-l text-[#081035] font-bold">{users.length}</p>
                </div>
            </header>
            <div className="flex flex-col items-center mt-10 gap-4">
            {users.length > 0 ? (
                users.map((user) => (
                <div key={user.id} className="flex justify-center items-center text-center gap-5 p-4 border-b border-gray-300 w-[90%] bg-gray-20 rounded-lg shadow">
                    <img src={logoUsers} alt="" className="w-[30px] h-[30px]" />
                    <div>
                    <h2 className="font-bold">نام : <span className="font-normal pr-3"> {user.first_name}</span></h2>
                    </div>
                    <div>
                    <h2 className="font-bold">نام خانوادگی: <span className="font-normal pr-3"> {user.last_name}</span></h2>
                    </div>
                    <div>
                    <h2 className="md:font-bold">ایمیل : <span className="text-[8px] md:font-normal pr-3"> {user.email}</span></h2>
                    </div>
                </div>
                ))
            ) : (
                <p className="text-red-600 text-lg font-bold mt-5">هیچ کاربری ثبت‌ نام نکرده است.</p>
            )}
            </div>
        </div>
    </div>
  )
}
