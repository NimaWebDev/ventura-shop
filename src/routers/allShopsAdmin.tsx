import { useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient"; // مسیرتو تنظیم کن

type Order = {
  id: number;
  user_id: string;
  total_price: number;
  created_at: string;
  // هر چی تو جدول orders هست اضافه کن
};

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // گرفتن یوزر لاگین‌شده
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("باید لاگین کنید");
        return;
      }

      // گرفتن اطلاعات از جدول users (برای گرفتن is_admin)
      const { data: userData, error: userError } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", user.id)
        .single();

      if (userError || !userData?.is_admin) {
        alert("شما ادمین نیستید");
        return;
      }

      setUser(user); // ذخیره کاربر در state

      // حالا سفارش‌ها رو بگیر
      const { data: ordersData, error: ordersError } = await supabase
        .from("orders")
        .select("*");

      if (ordersError) {
        console.error(ordersError);
      } else {
        setOrders(ordersData || []);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

    function formatNumberToPersian(num: number): string {
    return num.toLocaleString('fa-IR')
  }

  return (
    <div>
      <div className="container w-screen lg:w-[1200px] h-auto lg:h-[900px] bg-white ml-auto mr-auto mt-10 rounded-2xl">
        <h1 className="flex text-center justify-center items-center text-2xl font-bold pt-5">سفارش کاربران</h1>
        {orders.length === 0? (
          <p className='text-red-600 font-bold text-2xl text-center'>هیچ سفارشی ثبت نشده </p>
        ): (
          orders.map((order)=>(
            <div key={order.id} className="flex justify-center items-center text-center gap-5 p-4 mt-2 border-b border-gray-300 w-screen lg:w-[90%] bg-gray-20 rounded-lg shadow">
              <p>آیدی سفارش دهنده : {order.user_id}</p>
              <p>آیدی سفارش : {order.id}</p>
              <h3>مبلغ کل : {formatNumberToPersian(order.total_price)}</h3>
              <p>تاریخ : {new Date(order.created_at).toLocaleString()}</p>
            </div>
          ))
        )}
      </div>
    </div>
)}
