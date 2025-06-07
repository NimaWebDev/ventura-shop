
import imageFooter from '../assets/image-footer/Subtract232.png'
import logoNav from '../assets/navbar-logo/logo-nav.png'
import logoInsta from '../assets/logo-footers/logo-instagram.png'
import logoTelegram from '../assets/logo-footers/logo-telegram.png'
import logoWhatsApp from '../assets/logo-footers/logo-whatsapp.png'
import logoX from '../assets/logo-footers/logo-x.png'

export default function Footer() {
  return (
    <div className='mt-30 relative'>
        <header dir='rtl' className='hidden md:visible w-[570px] h-[80px] bg-[#6DA975] rounded-4xl md:flex justify-center items-center gap-20 lg:ml-105 2xl:ml-170 absolute lg:mt-0 2xl:mt-2'>
            <h1 className='text-[20px] text-white font-bold'>از تخفیفامون باخبر شید!!</h1>
            <div className='w-[263px] h-[48px] bg-white rounded-2xl flex justify-center items-center gap-5'>
                <input type="text" placeholder='ادرس ایمیل ...' className='w-[263px] h-[48px] bg-white rounded-2xl pr-3'/>
                <button className='w-[72px] h-[40px] bg-[#FFA700] rounded-xl ml-2 text-white text-[14px] cursor-pointer'>ارسال</button>
            </div>
        </header>
        <div className='border-t border-t-black lg:border-none'>
            <img src={imageFooter} alt="image" className='hidden lg:block w-full'/>
            <div className='justify-center text-center items-center md:absolute md:inset-0 md:z-10 flex-wrap gap-0 md:flex md:justify-center md:items-center md:gap-80'>
                <div className='mt-4'>
                    <h1 className='text-[#081035] font-bold text-[25px]'>لینک های <span className='text-[#6DA975]'>مهم</span></h1>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>بلاگ <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>محصولات <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>درباره ما <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>تماس با ما <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                </div>
                <div className=''>
                    <div className='flex items-center justify-center gap-2 mt-20'>
                        <img className='w-[29px] h-[28px]' src={logoNav} alt="logo" />
                        <h1 className='font-[Glancyr] font-bold text-3xl pr-5'>VENTURA</h1>
                    </div>
                    <p className='text-center md:text-right text-[#081035] font-bold pt-10'>"تجهیزات حرفه‌ای، ماجراجویی‌های فراموش‌نشدنی"</p>
                    <div className='flex justify-center items-center gap-5 mt-5'>
                        <img src={logoInsta} alt="logo" className='cursor-pointer'/>
                        <img src={logoTelegram} alt="logo" className='cursor-pointer'/>
                        <img src={logoWhatsApp} alt="logo" className='cursor-pointer'/>
                        <img src={logoX} alt="logo" className='cursor-pointer'/>
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-[#081035] font-bold text-[25px]'>دسته بندی <span className='text-[#6DA975]'>محصولات</span></h1>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>چادر کمپینگ <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>کوله پشتی <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>فلاسک و ماگ <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                    <p className='md:text-right pt-5 text-[#081035] font-bold cursor-pointer'>کیسه خواب <span className="inline-block w-2 h-2 bg-[#6DA975] rounded-full"></span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
