import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Nav from "../Shared/Nav";


const Root = () => {
    const location=useLocation()
    const loginLocation=location.pathname.includes('/login')
    const registerLocation=location.pathname.includes('/register')
    return (
        <div>
            <ScrollRestoration></ScrollRestoration>
            {
                (loginLocation||registerLocation)||<Nav></Nav>
            }
            
            <Outlet></Outlet>
            {
                (loginLocation||registerLocation)|| <Footer></Footer>
            }
            
             
        </div>
    );
};

export default Root;