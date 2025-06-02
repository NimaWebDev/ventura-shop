import { useState } from 'react'
import { supabase } from '../api/supabaseClient'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/navbar-logo/logo-nav.png'


export default function SignIn() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

const handleSignup = async () => {
  setLoading(true)
  setError(null)
  setSuccessMsg(null)

  if (!firstName || !lastName || !email || !password) {
    setError('لطفاً همه فیلدها را پر کنید.')
    setLoading(false)
    return
  }

  try {
    await supabase.auth.signOut()

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    console.log("Signup Response Data:", data)
    console.log("User ID:", data.user?.id)
    console.log("User Email from data:", data.user?.email)

    const { data: sessionData } = await supabase.auth.getSession()
    console.log("Session User Email:", sessionData.session?.user?.email)

    if (signUpError) {
      console.error("Sign up error:", signUpError)
      setError('خطا در ثبت‌نام: ' + signUpError.message)
      return
    }

    const userId = data.user?.id
    const userEmail = data.user?.email ?? email

    if (userId) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            id: userId,
            first_name: firstName,
            last_name: lastName,
            email: userEmail,
          },
        ])

      if (profileError) {
        console.error("Profile insert error:", profileError)
        setError("خطا در ذخیره پروفایل: " + profileError.message)
        return
      }

      setSuccessMsg("ثبت نام موفق! لطفاً وارد شوید.")
      setTimeout(() => {
        navigate("/login")
      }, 1500)
    }
  } catch (error: any) {
    if (error.message?.includes('duplicate key value')) {
      setError('این ایمیل قبلاً ثبت شده است.')
    } else {
      setError('مشکلی در ثبت‌نام رخ داد. لطفاً دوباره تلاش کنید.')
    }
  } finally {
    setLoading(false)
  }
}

  return (
    <div dir="rtl" className="w-[350px] bg-white md:w-[500px] h-[700px] rounded-3xl ml-auto mr-auto mt-10">
      <img src={logo} alt="logo" className="mr-auto ml-auto pt-10" />
      <h1 className="text-center pt-5 text-4xl font-bold text-[#081035]">ثبت نام</h1>
      
      {error && <p className="text-red-500 text-center font-bold mt-5">{error}</p>}
      {successMsg && <p className="text-green-600 text-center font-bold mt-5">{successMsg}</p>}

      <input type="text"placeholder="نام خود را وارد کنید :"className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-15 mr-12 md:mr-17 pr-2"value={firstName}onChange={(e) => setFirstName(e.target.value)}/>
      <br />
      <input type="text"placeholder="نام خانوادگی خود را وارد کنید :"className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-8 mr-12 md:mr-17 pr-2"value={lastName}onChange={(e) => setLastName(e.target.value)}/>
      <br />
      <input type="email"placeholder="ایمیل خود را وارد کنید :"className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-8 mr-12 md:mr-17 pr-2"value={email}onChange={(e) => setEmail(e.target.value)}/>
      <br />
      <input type="password"placeholder="رمز خود را وارد کنید :"className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-8 mr-12 md:mr-17 pr-2"value={password}onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button className="w-[250px] md:w-[360px] h-[48px] bg-[#007AFF] text-white font-bold rounded-xl mt-15 mr-12 md:mr-17 cursor-pointer"onClick={handleSignup}disabled={loading}>{loading ? 'در حال ثبت نام...' : 'ثبت نام'}</button>
    </div>
  )
}
