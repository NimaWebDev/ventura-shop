import { useState } from "react";
import { supabase } from "../api/supabaseClient";

function AddArticle() {

    const [title , setTitle] = useState("");
    const [time , setTime] = useState("");
    const [content , setContent] = useState("")
    const [image_article , setImage] = useState<File | null>(null);
    const [loading , setLoading] = useState(false);

    const handleSubmit = async (e:React.FormEvent)=>{
        e.preventDefault();
        setLoading(true);

        if (!image_article) return alert('عکس محصول وارد نشده !');

        const {data: uploadData , error: uploadError} = await supabase.storage
        .from("image-articles")
        .upload(`image_article/${Date.now()}_${image_article.name}` , image_article)

        if(uploadError){
            console.error(uploadError);
            return;
        }

        const imageURL = supabase.storage
        .from("image-articles")
        .getPublicUrl(uploadData.path).data.publicUrl;

        const {error} = await supabase.from("all_articles").insert([
            {
                title,
                content,
                time: Number(time),
                image_article: imageURL,
            },
        ])
        if(error){
            console.error(error)
        }else{
            alert("محصول با موفقیت اضافه شد");
            setTitle("");
            setTime("");
            setContent("");
            setImage(null)
        }
        setLoading(false)
    }

  return (
    <div>
        <form dir="rtl" onSubmit={handleSubmit} className="bg-white w-[380px] md:w-[700px] h-[700px] rounded-3xl ml-auto mr-auto mt-10 justify-center items-center text-center">
            <h1 className="text-center pt-5 text-4xl font-bold text-[#081035]">خوش آمدید</h1>
            <p className="text-center text-2xl font-bold text-[#081035] pt-5">محصول مورد نظر را اضافه کنید</p>
            <input type="text" onChange={(e)=> setTitle(e.target.value)} placeholder="نام مقاله را وارد کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-15 pr-2"/>
            <input type="number" onChange={(e)=> setTime(e.target.value)} placeholder="زمان مقاله را وارد کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="text" onChange={(e)=> setContent(e.target.value)} placeholder="محتوا مقاله را وار کنید :" className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2"/>
            <input type="file" onChange={(e)=> setImage(e.target.files?.[0] || null)} className="w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-5 pr-2 pt-2.5"/>
            <br />
            <button type="submit" disabled={loading} className="w-[254px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl text-center cursor-pointer mr-auto ml-auto mt-10">
                {loading? "در حال ثبت مقاله" : "افزودن مقاله"}
            </button>
        </form>
    </div>
  )
}

export default AddArticle