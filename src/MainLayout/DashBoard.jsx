import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaCalendarAlt,FaAd,FaCalendarCheck,FaBars,FaShopify  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { MdPayments } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
const DashBoard = () => {
    return (
        <div className="flex px-1">
            <div className=" w-64 bg-[#D1A054] min-h-screen">
                    <h1 className=" text-center text-2xl font-bold">BISTRO BOSS</h1>
                    <h1 className=" text-center text-xl font-semibold tracking-wider">Restaurant</h1>
                    <div>
                        <ul className="space-y-2 ps-3 mt-5">
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaHome></FaHome>User Home</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><MdPayments></MdPayments>payment history</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/myCart' className='flex items-center gap-2'><FaCartShopping></FaCartShopping>my cart</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaAd></FaAd>add review</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'> <span><FaCalendarCheck></FaCalendarCheck></span>my booking</NavLink></li>
                        </ul>
                    </div>
                    <div className="divider"></div>
                    <div>
                    <ul className="space-y-2 ps-3 mt-5">
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/' className='flex items-center gap-2'><FaHome></FaHome> Home</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaBars></FaBars>Menu</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaShopify></FaShopify> history</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaCartShopping></FaCartShopping>my cart</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><IoMdMail></IoMdMail>contact</NavLink></li>
                           
                        </ul>
                    </div>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;