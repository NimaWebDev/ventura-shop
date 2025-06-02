

function Pay() {
  return (
    <div dir="rtl" className="relative bg-white w-[380px] md:w-[700px] h-[700px] rounded-3xl ml-auto mr-auto mt-10 justify-center items-center text-center">
        <div className="absolute bg-blue-600 w-[350px] md:w-[500px] h-[500px] rounded-3xl mr-5 md:mr-25 mt-25 justify-center items-center text-center shadow-2xl shadow-blue-600">
            <h1 className="text-center pt-5 text-2xl font-bold text-white">پرداخت</h1>
            <input type="text" placeholder="شماره کارت خود را وار  کنید" className="w-[280px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="text" placeholder="CVV" className="w-[280px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="text" placeholder="تاریخ کارت" className="w-[280px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="text" placeholder="رمز دوم" className="w-[280px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <button className="w-[154px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl text-center cursor-pointer mr-auto ml-auto mt-10">تسویه حساب</button>
        </div>
    </div>
  )
}

export default Pay;