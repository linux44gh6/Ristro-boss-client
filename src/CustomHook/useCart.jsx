import {
    useQuery,
  } from '@tanstack/react-query'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const useCart = () => {
    const {user}=useContext(AuthContext)
    const {refetch,data:cart=[]}=useQuery({
        queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default useCart;