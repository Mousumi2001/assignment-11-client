import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-green-200">
                <div className='navbar-start'>
                    <a className="btn btn-ghost normal-case text-xl">MOUsumi kitchen</a>
                </div>
                <div className="navbar-end">
                    {/* mobile */}
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-20">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/login'>Login</Link></li>

                        </ul>
                    </div>
                </div>



                {/* full */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/login'>Login</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;