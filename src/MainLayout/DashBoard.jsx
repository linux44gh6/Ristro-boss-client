import { NavLink, Outlet } from "react-router-dom";
import { FaHome,FaCalendarAlt,FaAd,FaCalendarCheck,FaBars,FaShopify, FaUtensils, FaList, FaUser, FaBook  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import { MdPayments } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import useAdmin from "../Hooks/useAdmin";
const DashBoard = () => {
    // TODO:find the admin form the dataBase
    const [isAdmin]=useAdmin()
    return (
        <div className="flex px-1">
            <div className=" w-64 bg-[#D1A054] min-h-screen">
                    <h1 className=" text-center text-2xl font-bold">BISTRO BOSS</h1>
                    <h1 className=" text-center text-xl font-semibold tracking-wider">Restaurant</h1>
                    <div>
                        <ul className="space-y-2 ps-3 mt-5">
                           {isAdmin?<>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/adminHome' className='flex items-center gap-2'><FaHome></FaHome>Admin Home</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/addItem' className='flex items-center gap-2'><FaUtensils></FaUtensils>Add items</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/manageItem' className='flex items-center gap-2'><FaList></FaList>Manage items</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/mangeBooking' className={({isActive})=>isActive?"flex items-center gap-2 text-white":"flex items-center gap-2"}><FaBook></FaBook>Manage bookings</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/allUser' className='flex items-center gap-2'><FaUser></FaUser>all users</NavLink></li>
                           


                           </>:<>

                           <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaHome></FaHome>User Home</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaCalendarAlt></FaCalendarAlt>reservation</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/paymentHistory' className={({isActive})=>isActive?"flex items-center gap-2 text-white":"flex items-center gap-2"}><MdPayments></MdPayments>payment history</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink to='/dashboard/myCart' className={({isActive})=>isActive?"flex items-center gap-2 text-white":"flex items-center gap-2"}><FaCartShopping></FaCartShopping>my cart</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'><FaAd></FaAd>add review</NavLink></li>
                            <li className=" flex items-center text-xl uppercase"><NavLink className='flex items-center gap-2'> <span><FaCalendarCheck></FaCalendarCheck></span>my booking</NavLink></li>
                           </>

                           }
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