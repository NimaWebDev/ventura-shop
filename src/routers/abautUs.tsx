
import imageHome from '../assets/image-home/image-home-removebg-preview.png'
import logoWallet from '../assets/logo-abaut-us/wallet-check.png'
import logoHappy from '../assets/logo-abaut-us/logo-happy.png'
import logoSupport from '../assets/logo-abaut-us/24-support.png'

function AbautUs() {
  return (
    <div>
        <h1 className='animate__animated animate__backInDown text-center text-4xl font-bold text-[#081035] p-5'>! سفرت رو بچین، <span className='text-[#6DA975]'>وسایلش</span> رو داریم</h1>
        <img src={imageHome} alt="" className='w-[900px] h-[400px] mt-10 drop-shadow-[0_16px_16px_rgba(0,0,0,1)] ml-auto mr-auto'/>
        <h2 className='animate__animated animate__backInDown text-center text-2xl font-bold text-[#081035] p-5'> چرا <span className='text-[#6DA975]'>ونتورا</span> بهترین انتخاب است </h2>
        <div dir='rtl' className='md:flex justify-center items-center md:gap-20 mt-10'>
            <div className='md:w-[410px] h-[210px] bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <img src={logoWallet} alt="" className='m-2'/>
                <h3 className='text-[#081035] font-bold p-2'>پرداخت امن با درگاه امن</h3>
                <p className='text-[#929292] p-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است</p>
            </div>
            <div className='md:w-[410px] h-[210px] bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <img src={logoHappy} alt="" className='m-2'/>
                <h3 className='text-[#081035] font-bold p-2'>رضایت بیش از ۱ میلیون مشتری</h3>
                <p className='text-[#929292] p-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است</p>
            </div>
            <div className='md:w-[410px] h-[210px] bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <img src={logoSupport} alt="" className='m-2'/>
                <h3 className='text-[#081035] font-bold p-2'>پشتیبانی ۲۴ ساعته</h3>
                <p className='text-[#929292] p-2'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله است</p>
            </div>
        </div>
        <div className='md:flex justify-center items-center md:gap-20 mt-10'>
            <div dir='rtl' className='md:w-[410px] h-[210px] bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <h2 className='text-[#081035] font-bold p-5'>ماموریت ما</h2>
                <p className='text-[#929292] p-2'>هدف موچی‌چی ایجاد دنیایی شاد و رنگارنگ است. این فروشگاه با ارائه محصولات فانتزی و خاص، سعی در زیباسازی زندگی روزمره مشتریان دارد. موچی‌چی به دنبال ایجاد تجربه‌ای متفاوت است که بتواند لحظاتی شاد و خلاقانه برای مشتریان خود به ارمغان بیاورد.</p>
            </div>
            <div dir='rtl' className='mt-10 md:mt-0 md:w-[410px] h-[210px] bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <h2 className='text-[#081035] font-bold p-5'>چشم انداز ما</h2>
                <p className='text-[#929292] p-2'>تبدیل شدن به برندی الهام‌بخش در ایران و منطقه که با محصولات فانتزی و منحصربه‌فرد خود، لحظات شادی و خلاقیت را به زندگی مشتریان وارد می‌کند و دنیایی رنگارنگ را در خانه و محل کار افراد ایجاد می‌کند</p>
            </div>
        </div>
    </div>
  )
}

export default AbautUs