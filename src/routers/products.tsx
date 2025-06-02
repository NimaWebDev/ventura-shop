import { useEffect, useState } from "react"
import { supabase } from "../api/supabaseClient"
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/cartSlice';
import { AppDispatch } from '../components/store';

import logoShop from '../assets/logo-bestProduct/logo-shop.png'
import logoStar from '../assets/logo-bestProduct/logo-star.png'
import { useNavigate } from "react-router-dom";


interface ProductsINT {
  id: number
  name: string
  image: string
  score: number
  price: number
}

function Products() {

   const [products, setProducts] = useState<ProductsINT[]>([]);
   const dispatch = useDispatch<AppDispatch>();
   const navigate = useNavigate();

    const handleAddToCart = async (product: ProductsINT) => {
    const { data: { user } } = await supabase.auth.getUser()
   
     if (!user) {
       navigate('/login')
       return
     }
   
     dispatch(addToCart(product))
   
     const { error } = await supabase
       .from('cart')
       .upsert({
         user_id: user.id,
         product_id: product.id,
         name: product.name,
         image: product.image,
         price: product.price,
         quantity: 1,
       }, { onConflict: ['user_id', 'product_id'] })
   
     if (error) {
       console.error('Supabase insert error:', error)
     } else {
       navigate('/cart')
     }
   }

    useEffect(() => {
      const fetchProducts = async () => {
        const { data, error } = await supabase
          .from('products') 
          .select('*')

        if (error) console.error('Error:', error)
        else setProducts(data as ProductsINT[])
      }

      fetchProducts()
    }, [])

    function formatNumberToPersian(num: number): string {
      return num.toLocaleString('fa-IR')
    }

  return (
    <div className="min-h-screen w-[350px] md:w-[1200px] ml-auto mr-auto bg-white py-12 px-4 m-5">
      <h1 className="text-center text-[#081035] text-2xl font-bold p-5">محصولات ما</h1>
      <div className="w-[350px] lg:w-[1200px] ml-auto mr-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product)=>(
          <div key={product.id} className="mt-5 ml-auto mr-auto">
              <div className='w-[290px] h-[372px] bg-white rounded-4xl p-4 border-gray-200 shadow-xl'>
                <img src={product.image}alt='image product'className='w-[208px] h-[150px]'/>
                <h1 className='text-right font-bold text-[#081035]'>{product.name}</h1>
                <div dir='ltr' className='flex items-center gap-1 justify-end'>
                  <img src={logoStar} alt='logo star' className='mt-3' />
                  <p className=''>{formatNumberToPersian(product.score)}</p>
                </div>
                <div dir='ltr' className='flex items-center justify-between'>
                  <h2 dir='rtl' className='font-bold text-[#6DA975] text-xl mt-8'>
                  {formatNumberToPersian(product.price)} <span>تومان</span>
                  </h2>
                  <img onClick={() => handleAddToCart(product)}  src={logoShop} alt='logo shop' className='cursor-pointer mt-8' />
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products