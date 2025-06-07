import { useEffect, useState, useRef } from 'react'
import { supabase } from '../api/supabaseClient'

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';
import { AppDispatch } from '../components/store';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import imageBG from '../assets/images-bestProduct/image-bg-bestproduct.png'
import imageBag from '../assets/images-bestProduct/image-bag-bestProducts.png'
import logoTop from '../assets/logo-bestProduct/logo-top-bestProducts.png'
import logoFlash from '../assets/logo-bestProduct/logo-flash.png'
import logoStar from '../assets/logo-bestProduct/logo-star.png'
import logoShop from '../assets/logo-bestProduct/logo-shop.png'
import logoFlashRight from '../assets/logo-bestProduct/logo-flash-right.png'
import logoFlashLeft from '../assets/logo-bestProduct/logo-flash-left.png'

interface BestProductsINT {
  id: number
  name: string
  image: string
  score: number
  price: number
}



export const BestProducts = ()=>{
  
  const [products, setProducts] = useState<BestProductsINT[]>([])
  const swiperRef = useRef<any>(null)

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

const handleAddToCart = async (product: BestProductsINT) => {
  const { data, error: userError } = await supabase.auth.getUser()
  const user = data?.user

  if (userError || !user) {
    navigate('/login')
    return
  }

  dispatch(addToCart(product))

const { error } = await supabase
  .from('cart')
  .upsert(
    {
      user_id: user.id,
      product_id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
    },
    {
      onConflict: 'user_id,product_id', // <-- اینجا آرایه نیست، رشته هست
      ignoreDuplicates: false,
    }
  )

  if (error) {
    console.error('Supabase insert error:', error)
  } else {
    navigate('/cart')
  }
}


  useEffect(() => {
    const fetchBestProducts = async () => {
      const { data, error } = await supabase
      .from('bestProducts')
      .select('*')

      if (error) console.log('Supabase Error:', error)
      else setProducts(data || [])
    }

    fetchBestProducts()
  }, [])

  function formatNumberToPersian(num: number): string {
    return num.toLocaleString('fa-IR')
  }

    const handleProducts = ()=>{
        navigate('/web-products')
    }

  return (
    <div className='mt-30'>
      <header className='relative lg:flex'>
        <div className='lg:ml-40 2xl:ml-80'>
          <div>
            <img src={imageBG} alt='bg image'/>
            <img src={logoTop} alt='logo' className='absolute inset-0 z-10 lg:ml-130 2xl:ml-170' />
          </div>
          <h1 className='absolute inset-0 z-10 text-[35px] sm:text-[52px] text-[#ffffffb0] font-bold mt-40 lg:ml-50 2xl:ml-90'>
            JACK WOLFSKIN
          </h1>
          <img src={imageBag} alt='image bag' className='absolute inset-0 z-10 lg:ml-50 2xl:ml-95 mt-10' />
        </div>
        <div dir='rtl' className='mt-50 justify-center items-center text-center lg:ml-40 2xl:ml-70 xl:mt-10'>
          <h1 className='text-[35px] text-[#081035] sm:text-[52px] font-bold'>کــوله پشتی های سری </h1>
          <h1 className='text-[35px] text-[#6DA975] sm:text-[52px] font-bold'>JACK WOLFSKIN</h1>
          <p className='w-[350px] text-center sm:mr-10 sm:w-[428px] mr-0 h-[58px] text-wrap text-[#323444]'>
            طراحی ارگونومیک و پشتی طبی سری Jack Wolfskin مناسب حمل طولانی مدته و کمترین فشار رو به
            گردن و کمر شما وارد میکنه !!
          </p>
          <button onClick={handleProducts} dir='ltr' className='mr-auto ml-auto w-[170px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl flex items-center gap-1 cursor-pointer mt-10'><img className='pl-2' src={logoFlash} alt='logo' />مشاهده محصولات</button>
        </div>
      </header>

      <nav className='ml-auto mr-auto md:flex items-center text-center justify-between lg:ml-65 lg:mr-65 pt-20 md:pt-55'>
        <button onClick={handleProducts} dir='ltr'className='ml-auto mr-auto md:ml-30 md:ml-0 w-[154px] h-[44px] bg-[#6DA975] text-white font-bold rounded-4xl flex items-center gap-1 cursor-pointer mt-10'><img className='pl-5' src={logoFlash} alt='logo' />مشاهده بیشتر </button>
        <h1 className='text-[#081035] text-2xl mt-5  md:text-[28px] font-bold'>محصولات پرفروش</h1>
      </nav>

   <div className='w-full mt-20 px-[70px] max-w-full overflow-hidden'>
  <Swiper
    modules={[Navigation, Autoplay]}
    onSwiper={(swiper) => (swiperRef.current = swiper)}
    dir='rtl'
    autoplay={{
      delay: 2000,
      disableOnInteraction: false,
    }}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
  >
    {products.map((bestProduct) => (
      <SwiperSlide key={bestProduct.id}>
        <div className='w-[100%] h-[372px] bg-white rounded-4xl p-4 mx-auto'>
          <img
            src={bestProduct.image}
            alt='image product'
            className='w-[208px] h-[199px] mx-auto'
          />
          <h1 className='text-right font-bold text-[#081035]'>{bestProduct.name}</h1>
          <div dir='ltr' className='flex items-center gap-1 justify-end'>
            <img src={logoStar} alt='logo star' className='mt-3' />
            <p>{formatNumberToPersian(bestProduct.score)}</p>
          </div>
          <div dir='ltr' className='flex items-center justify-between'>
            <h2 dir='rtl' className='font-bold text-[#6DA975] text-xl mt-8'>
              {formatNumberToPersian(bestProduct.price)} <span>تومان</span>
            </h2>
            <img
              onClick={() => handleAddToCart(bestProduct)}
              src={logoShop}
              alt='logo shop'
              className='cursor-pointer mt-8'
            />
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  <div className='flex justify-center items-center gap-5 mt-10'>
    <img
      src={logoFlashLeft}
      alt='left'
      className='cursor-pointer'
      onClick={() => swiperRef.current?.slidePrev()}
    />
    <img
      src={logoFlashRight}
      alt='right'
      className='cursor-pointer'
      onClick={() => swiperRef.current?.slideNext()}
    />
  </div>
</div>

    </div>
  )
}
