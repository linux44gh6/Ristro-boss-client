import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import SingleMenu from "../SingleComponents/SingleMenu";
import axios from "axios";
import useMenu from "../../CustomHook/useMenu";

const Menu = () => {
    const [menu,setMenu]=useState([])
   const customHook=useMenu()
   console.log("myCUstomHook",customHook);
    useEffect(()=>{
        const getData=async()=>{
            const data=await axios(`${import.meta.env.VITE_BASE_URL}/menu`)
            console.log(data.data);
            const findPopular=data.data.filter(pop=>pop.category=='popular')
            setMenu(findPopular)
        }
        getData()
    },[])
    return (
        <div className=" px-10">
            <SectionTitle
            subHeading={'---Check it out---'}
            Heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {
                    menu.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
        </div>
    );
};

export default Menu;