import { useState } from "react";
import { supabase } from "../api/supabaseClient";


function AddProduct() {

    const [name , setName] = useState("");
    const [price , setPrice] = useState("");
    const [score , setScore] = useState("");
    const [image , setImage] = useState<File | null>(null);
    const [loading , setLoading] = useState(false);

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);

        if (!image) return alert('عکس محصول وارد نشده !');

        const {data: uploadData , error: uploadError} = await supabase.storage
        .from("image-web-product")
        .upload(`images/${Date.now()}_${image.name}` , image)

        if(uploadError){
            console.error(uploadError);
            return;
        }

        const imageURL = supabase.storage
        .from("image-web-product")
        .getPublicUrl(uploadData.path).data.publicUrl;

        const {error} = await supabase.from("products").insert([
            {
                name,
                price: Number(price),
                score: Number(score),
                image: imageURL,
            },
        ])
        if(error){
            console.error(error)
        }else{
            alert("محصول با موفقیت اضافه شد");
            setName("");
            setPrice("");
            setScore("");
            setImage(null)
        }
        setLoading(false)
    }


  return (
    <div>
        <form dir="rtl" onSubmit={handleSubmit} className="bg-white w-[380px] md:w-[700px] h-[700px] rounded-3xl ml-auto mr-auto mt-10 justify-center items-center text-center">
            <h1 className="text-center pt-5 text-4xl font-bold text-[#081035]">خوش آمدید</h1>
            <p className="text-center text-2xl font-bold text-[#081035] pt-5">محصول مورد نظر را اضافه کنید</p>
            <input type="text" onChange={(e)=> setName(e.target.value)} placeholder="نام محصول را وارد کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-15 pr-2"/>
            <input type="number" onChange={(e)=> setPrice(e.target.value)} placeholder="قیمت محصول را وارد کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="number" onChange={(e)=> setScore(e.target.value)} placeholder="امتیاز محصول را وار کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="file" onChange={(e)=> setImage(e.target.files?.[0] || null)} className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2 pt-2.5"/>
            <br />
            <button type="submit" disabled={loading} className="w-[254px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl text-center cursor-pointer mr-auto ml-auto mt-10">
                {loading? "در حال ثبت محصول" : "افزودن محصول"}
            </button>
        </form>
    </div>
  )
}

export default AddProduct;