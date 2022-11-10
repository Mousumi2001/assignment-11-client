import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
    const { signIn, googleSign } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSignIn = event => {
        event.prevantDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }

    const handleGoogle = () => {
        googleSign(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="hero min-h-screen bg-white">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm bg-base-100">
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">

                            <input type="text" name='email' placeholder="email" className="border-b-4 border-pink-600 shadow-lg mt-5" />
                        </div>
                        <div className="form-control">

                            <input type="password" name='password' placeholder="password" className=" border-b-4 border-pink-600 shadow-lg mt-5" />
                            <label className="label">
                                <p>Create a new accoutn? <Link className='text-xl font-bold text-pink-500' to='/register'>Register</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <br />
                            <button onClick={handleGoogle} className="btn btn-primary">Login With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;