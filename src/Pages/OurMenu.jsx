import { NavLink } from "react-router-dom";
import SectionTitle from "../Components/SectionTitle";
import SingleMenu from "../Components/SingleComponents/SingleMenu";
import useMenu from "../CustomHook/useMenu";
import Cover from "../Shared/Cover";
import coverImage from '../assets/menu/banner3.jpg'
import deseart from "../assets/menu/dessert-bg.jpeg"
import pizza from '../assets/menu/pizza-bg.jpg'
import salad from '../assets/menu/salad-bg.jpg'
import soup from '../assets/menu/soup-bg.jpg'
const OurMenu = () => {
    const [menu]=useMenu()
    const offers=menu.filter(ofr=>ofr.category=="offered")
    const dessert=menu.filter(ofr=>ofr.category=="dessert")
    const pizzas=menu.filter(ofr=>ofr.category=="pizza")
    const soups=menu.filter(ofr=>ofr.category=="soup")
    const salads=menu.filter(ofr=>ofr.category=="salad")
   
    return (
        <div>
            <Cover
            image={coverImage}
            Heading={'OUR MENU'}
            ></Cover>

           <div>
           <SectionTitle
            subHeading={'---Dont miss---'}
            Heading={'TODAYS OFFER'}
            ></SectionTitle>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-10">
                {
                    offers.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/ourShop">
                <button className="btn outline-none border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
                </NavLink>
            </div>
           </div>
          <div className="mt-20">
          <Cover
           image={deseart}
           Heading={'DESSERTS'}
           ></Cover>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-10 mt-10">
                {
                    dessert.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/ourShop/dessert">
                <button className="btn outline-none border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
                </NavLink>
            </div>
          </div>
          <div className=" mt-20">
          <Cover
           image={pizza}
           Heading={'PIZZA'}
           ></Cover>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-10 mt-10">
                {
                    pizzas.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/ourShop/pizza">
                <button className="btn outline-none border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
                </NavLink>
            </div>
          </div>
          <div className=" mt-20">
          <Cover
           image={salad}
           Heading={'SALAD'}
           ></Cover>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-10 mt-10">
                {
                    salads.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/ourShop/salad">
                <button className="btn outline-none border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
                </NavLink>
            </div>
          </div>
          <div className="mt-20">
          <Cover
           image={soup}
           Heading={'SOUP'}
           ></Cover>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:px-10">
                {
                    soups.map(item=><SingleMenu
                    key={item._id}
                    item={item}
                    ></SingleMenu>)
                }
            </div>
            <div className="flex justify-center items-center">
                <NavLink to="/ourShop/soup">
                <button className="btn outline-none border-b-2 border-b-black">ORDER YOUR FAVOURITE FOOD</button>
                </NavLink>
            </div>
          </div>
        </div>
    );
};

export default OurMenu;