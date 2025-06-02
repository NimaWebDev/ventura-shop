import { useEffect , useState } from 'react'
import { supabase } from '../api/supabaseClient'

interface BrandsINT {
    id: number,
    image: string,
}

export default function Brands() {

    const [brands , setBrands] = useState<BrandsINT[]>([])

    useEffect(() => {
    const fetchBrands = async () => {
        const { data, error } = await supabase.from("brands").select("*");
        console.log("data:", data);
        console.log("error:", error);

        if (error) console.log("Supabase Error:", error);
        else setBrands(data);
    };

    fetchBrands();
    }, []);

  return (
    <div className='w-full h-[1080px] sm:h-[600px] md:h-[378px] bg-[#E4F6E7] '>
        <h1 className='text-[#081035] text-center text-[34px] font-bold mb-5 mt-30'>برند ها</h1>
        <div data-aos="fade-down" className='w-auto sm:w-[500px] lg:w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center ml-auto mr-auto'>
            {brands.map((brand)=>(
                <div className='w-[284px] h-[90px] mr-auto ml-auto mt-5' key={brand.id}>
                    <img src={brand.image} alt="image brands" className=''/>
                </div>
            ))}
        </div>
    </div>
  )
}
