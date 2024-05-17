import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import SingleMenu from "../SingleComponents/SingleMenu";

const Menu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const findPopular=data.filter(pop=>pop.category=='popular')
            setMenu(findPopular)
        })
    },[menu])
console.log(menu);
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