import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser, googleSign } = useContext(AuthContext);

    const provider = new GoogleAuthProvider();


    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
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
                    <h1 className="text-5xl font-bold">Please Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">

                            <input type="text" placeholder="name" name='name' className="border-b-4 border-pink-600 shadow-lg mt-5" />
                        </div>
                        <div className="form-control">

                            <input type="text" placeholder="email" name='email' className="border-b-4 border-pink-600 shadow-lg mt-5" />
                        </div>
                        <div className="form-control">

                            <input type="password" placeholder="password" name='password' className="border-b-4 border-pink-600 shadow-lg mt-5" />
                            <label className="label">
                                <p>Already have an account? <Link className='text-xl font-bold text-pink-500' to='/login'>Login</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <br />
                            <button onClick={handleGoogle} className="btn btn-primary">Register With Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;