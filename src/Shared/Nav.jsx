import { NavLink } from "react-router-dom";


const Nav = () => {
    const navOption=<>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/ourMenu'>Our Menu</NavLink></li>
      <li><NavLink to='/ourShop'>Our Shop</NavLink></li>
    </>
    return (
        <div className="navbar fixed bg-base-100 bg-opacity-10 z-20  mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {navOption}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">BISTRO BOSS <br />
Restaurant</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Nav;