import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

interface Article {
  id: number;
  title: string;
  content: string;
  time: number;
  image_article: string;
  slug: string;
  created_at: string;
}

function AllArticlesInfo() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      const { data, error } = await supabase
        .from("all_articles")
        .select("*")
        .eq("slug", slug)
        .single();

      if (error) {
        console.error("خطا در گرفتن مقاله:", error.message);
      } else {
        setArticle(data);
      }

      setLoading(false);
    };

    fetchArticle();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;
  if (!article) return <p className="text-center mt-10">مقاله‌ای پیدا نشد!</p>;

return (
  <div dir="rtl" className="min-h-screen w-[350px] md:w-[1200px] ml-auto mr-auto bg-white py-12 px-4 m-5">
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-8">
      <img src={article.image_article} alt="" className="w-auto md:w-[900px] h-[400px]"/>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 pt-5">
        {article.title}
      </h1>

      <p className="text-sm text-gray-500 text-center mb-8">
        مدت زمان مطالعه: {article.time} دقیقه
      </p>

      <div className="prose prose-lg text-gray-800 leading-8 whitespace-pre-line">
        {article.content}
      </div>
    </div>
  </div>
);
}

export default AllArticlesInfo;