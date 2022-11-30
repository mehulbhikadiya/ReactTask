import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: '',
    });

    //user Login
    const handleLogin = (e) => {
        e.preventDefault();

        const userlogged = JSON.parse(localStorage.getItem('user'));
        if (input.email === userlogged.email && input.password === userlogged.password) {
            localStorage.setItem('loggedin ', true);
            navigate("/navbar");
        } else {
            alert('Wrong Email or password');
        }
    }


    //Page css
    const signIn = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        textDecoration: 'none',
    }

    const passIcone = {
        textAlign: 'end',
        alignItem: 'center',
        marginRight: '20px',
        marginTop: '-31px',
        cursor: 'pointer'
    }

    const ForgotPass = {
        textAlign: 'end',
        alignItem: 'center',
        textDecoration: 'none',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'end'
    }

    const singIcone = {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '-25px',
        marginRight: '20px',
        color: 'white'
    }

    return (
        <div>
            <div className="container mt-5 body-bg ">
                <div className="main_div mt-5">
                    <form action="" className='w-50 mx-auto Login-form-style' onSubmit={handleLogin}>
                        <h4 className='text-center text-capitalize'>Sign in</h4>
                        <p style={signIn}> Not a member? <NavLink to='/register' style={{ textDecoration: 'none' }}> &nbsp; Sing up</NavLink> </p>

                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='E-mail'
                            className='form-control mt-4'
                            value={input.email}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        />
                        <p></p>
                        <input
                            type='password'
                            name='password'
                            id='password'
                            placeholder='password'
                            className='form-control'
                            value={input.password}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        />
                        <NavLink to='#' style={ForgotPass}> <span className='text-primary'> Forgot Password</span> </NavLink>
                        <p></p>

                        <button className='btn btn-primary w-100 mt-4'> Sign in</button>
                        <span style={singIcone} ><i class="fa fa-arrow-right" aria-hidden="true" /> </span>
                        <br />
                        <p></p>

                        <input type="checkbox" name="terms" id="terms" className='text-capitalize' /> I have read and agree to the <span className='text-primary'> Terms of Service</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

