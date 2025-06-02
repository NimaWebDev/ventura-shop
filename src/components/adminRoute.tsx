import { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../api/supabaseClient";

interface ProtectedRouteProps {
  children: ReactNode;
  adminOnly?: boolean;
}

const adminEmail = "nimatajik39@gmail.com";

export default function ProtectedRoute({ children, adminOnly = false }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>در حال بررسی دسترسی...</div>;

  if (!user) {
    // اگر لاگین نکرده باشه می‌ره صفحه لاگین
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && user.email !== adminEmail) {
    // اگر ادمین نباشه اجازه دسترسی به صفحه ادمین نیست
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
