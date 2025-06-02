
import logoTopCategory from '../assets/logo-category/logo-top-category.png'
import imageCategory1 from '../assets/image-category/image-category1.png'
import imageCategory2 from '../assets/image-category/image-category2.png'
import imageCategory3 from '../assets/image-category/image-category3.png'
import imageCategory4 from '../assets/image-category/image-category4.png'

import image from '../assets/image-category/Subtract.svg'

export default function Category() {
  return (
<div className="relative w-full mt-20">
  {/* تصویر پس‌زمینه فقط در دسکتاپ نمایش داده بشه */}
  <img
    src={image}
    alt="background"
    className="hidden md:block w-full max-w-[1031px] h-auto mx-auto"
  />

  {/* کارت‌ها روی پس‌زمینه (دسکتاپ) یا بک‌گراند سبز (موبایل) */}
  <div className="z-10 flex flex-col items-center justify-center text-white px-4 md:bg-transparent relative md:absolute md:inset-0">
    <h1 className="text-[#081035] text-2xl font-bold mb-10 md:text-white">دسته بندی محصولات</h1>
    <div data-aos="fade-down" className="flex flex-wrap justify-center gap-6 mb-20 max-w-[900px] mx-auto">
      {[imageCategory1, imageCategory2, imageCategory3, imageCategory4].map((img, i) => (
        <div
          key={i}
          className="flex flex-col items-center w-[45%] sm:w-[199px] h-[185px] rounded-4xl bg-white cursor-pointer"
        >
          <img src={img} alt={`image${i + 1}`} className="w-[135px] h-[115px] mt-5" />
          <h2 className="mt-2 text-[#081035] font-bold text-[18px]">
            {["چراغ قوه", "فلاسک و ماگ", "میز و صندلی", "کوله پشتی"][i]}
          </h2>
        </div>
      ))}
    </div>
  </div>

  <p className="mt-10 text-center w-[350px] mx-auto text-[#081035] leading-loose text-[16px] font-bold md:mt-30 md:w-[795px]">
    تجهیزات حرفه‌ای، ماجراجویی‌های فراموش‌نشدنی! باور داریم که هر سفر به طبیعت می‌تونه به تجربه منحصر‌ به‌فرد و خاطره‌انگیز تبدیل شه. به همین دلیل بهترین و باکیفیت‌ترین لوازم کمپینگ و سفر رو برای شما فراهم کردیم. از چادرهای سبک و کم‌حجم تا وسایل آشپزی و روشنایی، همه‌چیز آماده‌ست تا شما بدون نگرانی به دل طبیعت بزنید.
  </p>
</div>


  )
}

