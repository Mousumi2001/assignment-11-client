import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-green-200">
                <div className='navbar-start'>

                    <img className='w-12 h-12 rounded-full' src='https://tse1.mm.bing.net/th?id=OIP.4eXw2bCHk-QXLGs0jECw9gHaHR&pid=Api&P=0' alt='' /><p className='text-xl font-bold text-'>FOOD Lover</p>
                </div>
                <div className="navbar-end">
                    {/* mobile screen*/}
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-20">
                            <li className='text-2xl font-bold'><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {
                                user?.email ?
                                    <>
                                        <li><button onClick={handleSignOut}>LogOut</button></li>
                                        <li><Link to='/myreview'>My Review</Link></li>
                                        <li><Link to='/addService'>Add Service</Link></li>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/login'>Login</Link></li>
                                        <li><Link to='/register'>Register</Link></li>
                                    </>

                            }

                        </ul>
                    </div>
                </div>



                {/* full */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='text-xl font-bold text-pink-700'><Link to='/'>Home</Link></li>
                        <li className='text-xl font-bold text-pink-700'><Link to='/blog'>Blog</Link></li>

                        {
                            user?.email ?
                                <>
                                    <li className='text-xl font-bold text-pink-700'><button onClick={handleSignOut}>LogOut</button></li>
                                    <li className='text-xl font-bold text-pink-700'><Link to='/myreview'>My Review</Link></li>
                                    <li className='text-xl font-bold text-pink-700'><Link to='/addService'>Add Service</Link></li>
                                </>
                                :
                                <>
                                    <li className='text-xl font-bold text-pink-700'><Link to='/login'>Login</Link></li>
                                    <li className='text-xl font-bold text-pink-700'><Link to='/register'>Register</Link></li>
                                </>

                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;