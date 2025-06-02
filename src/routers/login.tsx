import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../api/supabaseClient'

import { showSuccessAlert } from '../components/swalHelper'

import logoFlashbtn from '../assets/logo-bestProduct/logo-flash.png'
import logo from '../assets/navbar-logo/logo-nav.png'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [successMsg, setSuccessMsg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const AdminEmail = 'nimatajik39@gmail.com'
  const AdminPassword = 'nima1234'

  const handleSignIn = () => {
    navigate('/singIn') 
  }

  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    setSuccessMsg(null)
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      setSuccessMsg('ورود موفق! خوش آمدید.')
      showSuccessAlert("ورود موفق ! خوش آمدید")

      setTimeout(() => {
        if(email === AdminEmail && password === AdminPassword){
          navigate('/panelAdmin')
        }else{
          navigate('dashboard')
        }
      }, 1500) 
    } catch (error: any) {
      if (error.message.includes('Invalid login credentials')) {
        setError('ایمیل یا رمز عبور نادرست است. ')
      } else if (email === '' && password === ''){
        setError('لطفا رمز و ایمیل خود را وارد کنید')
      }else{
        setError('وارد جیمیل شوید و ورود خود را تایید کنید')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div dir="rtl" className="w-[350px] bg-white md:w-[500px] h-[700px] rounded-3xl ml-auto mr-auto mt-10">
        <img src={logo} alt="لوگو" className="mr-auto ml-auto pt-10" />
        <h1 className="text-center pt-5 text-4xl font-bold text-[#081035]">خوش آمدید</h1>
        <p className="text-center text-2xl font-bold text-[#081035] pt-5">وارد شوید</p>

        {error && <p className="text-red-500 text-center font-bold mt-5">{error}</p>}
        {successMsg && <p className="text-green-600 text-center font-bold mt-2">{successMsg}</p>}

        <input className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-15 mr-12 md:mr-17 pr-2"type="email"placeholder="ایمیل خود را وارد کنید :"value={email}onChange={(e) => setEmail(e.target.value)}/>
        <br />
        <input className="w-[250px] md:w-[360px] h-[48px] bg-[#F2F2F2] text-[#4D4D4D] rounded-xl mt-8 mr-12 md:mr-17 pr-2"type="password"placeholder="رمز خود را وارد کنید :"value={password}onChange={(e) => setPassword(e.target.value)}/>
        <br />
        <button className="w-[250px] md:w-[360px] h-[48px] bg-[#007AFF] text-white font-bold rounded-xl mt-15 mr-12 md:mr-17 cursor-pointer"onClick={handleLogin}disabled={loading}>
          {loading ? 'در حال ورود...' : 'ورود'}
        </button>
        <button onClick={handleSignIn}dir="ltr"className=":w-[154px] h-[44px] bg-[#081035] text-white font-bold rounded-4xl flex items-center gap-1 cursor-pointer mr-auto ml-auto  mt-10"><img className="pl-5" src={logoFlashbtn} alt="logo" />حسابی ندارید</button>
      </div>
    </div>
  )
}
