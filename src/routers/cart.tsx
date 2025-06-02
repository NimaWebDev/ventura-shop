import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../components/store';
import { removeFromCart, clearCart } from '../components/cartSlice';
import { supabase } from '../api/supabaseClient'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { showSuccessAlert, showErrorAlert } from '../components/swalHelper';

import logoBuy from '../assets/logo-cart/icons8-buy.gif'
import logoDelete from '../assets/logo-cart/icons8-delete-50.png'

export const Cart = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log("Cart items from Redux:", items);

const handleDeleteFromCart = async (productId: number) => {
  setLoading(true);

  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError || !user) {
    showErrorAlert("لطفا اول وارد شوید !")
    setLoading(false);
    return;
  }

  const userId = user.id;

  // حذف آیتم از دیتابیس
  const { error } = await supabase
    .from('cart')
    .delete()
    .eq('product_id', productId)
    .eq('user_id', userId);

  if (error) {
    console.error('Supabase delete error:', error);
    alert('مشکلی در حذف محصول از سبد خرید رخ داد');
  } else {
    // حذف از redux فقط اگر حذف از دیتابیس موفق بود
    dispatch(removeFromCart(productId));
  }

  setLoading(false);
};

const handleSubmitOrder = async () => {
  if (items.length === 0) {
    alert("سبد خرید خالی است.");
    return;
  }

  setLoading(true);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    alert("برای ثبت سفارش باید وارد شوید.");
    setLoading(false);
    return;
  }

  const order = {
    user_id: user.id,
    item: items,
    total_price: totalPrice,
  };

  const { error: insertError } = await supabase.from("orders").insert([order]);

  if (insertError) {
    console.error("خطا در ثبت سفارش:", insertError);
    showErrorAlert("مشکلی در ثبت سفارش رخ داد :(")
  } else {
    showSuccessAlert("سفارش شما با موفقیت ثبت شد ")
    navigate("/pay_cart")
    dispatch(clearCart()); // خالی کردن سبد خرید از Redux
  }

  setLoading(false);
};

  function formatNumberToPersian(num: number): string {
    return num.toLocaleString('fa-IR')
  }

  return (
    <div className='container w-auto lg:w-[1200px] h-[900px] bg-white ml-auto mr-auto mt-10 rounded-2xl'>
      <h1 className='flex text-center justify-center items-center text-2xl font-bold pt-5'>سبد خرید <img src={logoBuy} alt="" /></h1>
      {items.length === 0 ?(
        <p className='text-red-600 font-bold text-2xl text-center'>سبد خرید شما خالی است </p>
      ): (
        <div>
          {items.map((item)=>(
            <div key={item.id} className="flex justify-center items-center text-center gap-5 p-4 mt-2 border-b border-gray-300 w-[90%] bg-gray-20 rounded-lg shadow">
              <img src={item.image} alt="" className="w-[50px] h-[50px]"/>
              <h2 className='font-bold'>{item.name}</h2>
              <p><span className='font-medium'>{formatNumberToPersian(item.price)}</span> تومان </p>
              <p className='underline'>{formatNumberToPersian(item.quantity)} <span>عدد</span> </p>
              <img onClick={()=> handleDeleteFromCart(item.id)} src={logoDelete} alt="" className="w-[30px] h-[30px] cursor-pointer"/>
            </div>
          ))}
          <div className='flex justify-center items-center text-center mt-5 p-2 gap-2 border-b border-gray-400 w-[90%] md:w-[40%] bg-gray-20 rounded-lg shadow ml-auto mr-auto'>
            <p className='font-bold'>مجموع :</p>
            <p className='underline'>{formatNumberToPersian(totalPrice)}</p>
            <button onClick={handleSubmitOrder} disabled={loading} className='w-[100px] h-[40px] bg-green-600 text-[15px] text-white rounded p-2 cursor-pointer'>{loading ? "درحال ثبت سفارش " : "ثبت سفارش"}</button>
            <button onClick={()=> dispatch(clearCart())} className='w-[100px] bg-red-500 text-white cursor-pointer rounded p-2'>حذف همه </button>
          </div>
        </div>
      )}
    </div>
  );
};
