import { useEffect , useState } from 'react'
import { supabase } from '../api/supabaseClient'

import image from '../assets/image-off-products/image-main.png'
import logoOff from '../assets/logo-offProduct/logo-off-product.png'
import logoStar from '../assets/logo-offProduct/logo-star.png'
import logoShop from '../assets/logo-offProduct/logo-shop-off-product.png'

interface OffProductsINT {
    id: number,
    name: string,
    image: string,
    score: number,
    price: number,
    offPrice: number
}

export default function OffProducts() {

    const [products , setProducts] = useState<OffProductsINT[]>([])
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 ساعت به ثانیه

    useEffect(() => {
    const fetchOffProducts = async () => {
        const { data, error } = await supabase.from("offProducts").select("*");
        console.log("data:", data);
        console.log("error:", error);

        if (error) console.log("Supabase Error:", error);
        else setProducts(data);
    };
    fetchOffProducts();
    }, []);

    function formatNumberToPersian(num: number): string {
    return num
        .toLocaleString('fa-IR') // تبدیل به فارسی + جداکننده هزارگان
    }

    // شمارش معکوس

      useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer); // تمیز کردن تایمر
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return {
      hours: h.toString().padStart(2, '0'),
      minutes: m.toString().padStart(2, '0'),
      seconds: s.toString().padStart(2, '0'),
    };
  };
    const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
<div className='relative max-w-full mx-auto mt-20 px-4'>
  <img
    src={image}
    alt="image"
    className='h-[2000px] sm:h-[1200px] w-full max-w-[1290px] xl:h-auto mx-auto rounded-xl'
  />

  <div className='absolute inset-0 z-10 flex flex-wrap justify-center gap-2 items-start pt-10 px-2'>
    {products.map((productOff) => (
      <div key={productOff.id} className='bg-white rounded-4xl p-4 mt-10 w-[90%] sm:w-[272px] flex flex-col items-center ml-0 sm:ml-10 mb-6'>
        <img src={logoOff} alt="logo off" />
        <img src={productOff.image} alt="image product" className='w-[199px] h-[199px]' />
        <h1 className='text-right font-bold text-[#081035] w-full'>{productOff.name}</h1>
        <div className='flex items-center gap-1 justify-end w-full'>
          <img src={logoStar} alt="logo star" />
          <p>{formatNumberToPersian(productOff.score)}</p>
        </div>
        <h2 dir="rtl" className='text-left text-[#B2B4C2] line-through w-full'>{formatNumberToPersian(productOff.offPrice)} <span>تومان</span></h2>
        <div className='flex items-center justify-between w-full'>
          <h2 dir="rtl" className='font-bold text-[#6DA975] text-xl'>{formatNumberToPersian(productOff.price)} <span>تومان</span></h2>
          <img src={logoShop} alt="logo shop" className='cursor-pointer' />
        </div>
      </div>
    ))}

    <div data-aos="fade-left" className='bg-[#6DA975] rounded-tl-[70px] rounded-bl-[70px] w-[90%] sm:w-[288px] h-[300px] md:h-[378px] ml-0 sm:ml-10 flex flex-col items-center pt-10 lg:mt-10'>
      <h1 className='text-white text-[28px] sm:text-[34px] text-center px-4 font-bold'>محصــــولات تخـــفیف دار</h1>
      <div className='w-[226px] h-[100px] bg-white rounded-4xl mt-10 flex justify-center items-center gap-5'>
        {[
          { label: "ساعت", value: hours },
          { label: "دقیقه", value: minutes },
          { label: "ثانیه", value: seconds },
        ].map(({ label, value }, i) => (
          <div key={i} className='flex flex-col items-center'>
            <div className='w-[48px] h-[48px] bg-[#ffa6002c] text-[#FFA700] font-bold rounded-2xl text-center pt-3'>{value}</div>
            <h2 className='text-center text-[#081035] text-[11px] pt-2'>{label}</h2>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}
