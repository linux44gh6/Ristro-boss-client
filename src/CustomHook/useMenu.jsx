// import axios from "axios";
// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMenu = () => {
    // const [menu,setMenu]=useState([])
  
    // useEffect(()=>{
    //     const getData=async()=>{
    //         const data=await axios(`${import.meta.env.VITE_BASE_URL}/menu`)
    //         setMenu(data.data)
    //     }
    //     getData()
    // },[])
    // return [menu]

    const {data:menu=[],refetch,isPending:loading}=useQuery({queryKey:['menu'],
    queryFn:async()=>{
        const res=await axios.get(`${import.meta.env.VITE_BASE_URL}/menu`)
        return res.data
    }})
    return [menu,refetch,loading]
};

export default useMenu;