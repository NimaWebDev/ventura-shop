import { useNavigate } from 'react-router-dom'
import errorImage from '../assets/404-1.png'

export default function Error() {

    const navigate = useNavigate()
    const handleHome = ()=>{
        navigate("/")
    }

  return (
    <div className='w-full'>
        <img onClick={handleHome} src={errorImage} alt="" className='w-full'/>
    </div>
  )
}
