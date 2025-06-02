import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCartFromDB } from '../components/cartSlice'
import { supabase } from '../api/supabaseClient'

const CartLoader = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCart = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return;

      const { data, error } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', user.id)

      if (error) {
        console.error('Error fetching cart from DB:', error)
      } else {
        const cartItems = data.map(item => ({
          id: item.product_id,
          name: item.name,
          image: item.image,
          price: item.price,
          score: item.score,
          quantity: item.quantity
        }))
        dispatch(setCartFromDB(cartItems))
      }
    }

    fetchCart()
  }, [])

  return null
}

export default CartLoader;
