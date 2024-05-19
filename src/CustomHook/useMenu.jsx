import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu,setMenu]=useState([])
  
    useEffect(()=>{
        const getData=async()=>{
            const data=await axios(`${import.meta.env.VITE_BASE_URL}/menu`)
            setMenu(data.data)
        }
        getData()
    },[])
    return [menu]
};

export default useMenu;