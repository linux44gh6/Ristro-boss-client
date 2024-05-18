import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu,setMenu]=useState([])
  
    useEffect(()=>{
        const getData=async()=>{
            const data=await axios(`${import.meta.env.VITE_BASE_URL}/menu`)
            console.log(data.data);
            const findPopular=data.data.filter(pop=>pop.category=='popular')
            setMenu(findPopular)
        }
        getData()
    },[])
    return [menu]
};

export default useMenu;