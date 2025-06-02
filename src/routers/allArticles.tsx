import { useEffect, useState } from "react";
import { supabase } from "../api/supabaseClient";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  content: string;
  time: number;
  image_article: string;
  slug: string;
  created_at: string;
}

function AllArticles() {

   const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('all_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div className="justify-center items-center text-center">
        <h1 className="pt-5 text-[#081035] text-2xl font-bold">لیست مقالات</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[350px] md:w-[650px] lg:w-[1300px] ml-auto mr-auto">
            {articles.map((article)=>(
                <div key={article.id} className="ml-auto mr-auto w-[300px] h-[372px] bg-white rounded-4xl p-4 mt-5 text-right shadow-sm hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                    <img src={article.image_article} alt="" className="w-[300px] h-[180px] rounded-2xl"/>
                    <h2 className="pt-2 text-[#081035] font-bold">{article.title}</h2>
                    <p className="pt-2">زمان مقاله : {article.time}</p>
                    <Link to={`/all_article_Info/${article.slug}`}>
                      <p className="text-blue-500 pt-5 underline cursor-pointer">رفتن به مقاله</p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AllArticles;