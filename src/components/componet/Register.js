
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    });

    //Store data in localstprage
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/');
    }

    const signIn = {
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        textDecoration: 'none',
    }

    // const passIcone = {
    //     textAlign: 'end',
    //     alignItem: 'center',
    //     marginRight: '20px',
    //     marginTop: '-31px',
    //     cursor: 'pointer'
    // }

    const singIcone = {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '-25px',
        marginRight: '20px',
        color: 'white'
    }

    return (
        <div className='body-bg'>
            <div className="container mt-5">
                <div className="main_div">
                    <form action="" className='w-50 mx-auto mt-4 register-form-style' onSubmit={handleSubmit}>
                    <h3 className='text-center text-capitalize'>Create account</h3>
                    <NavLink to='/' className=' text-dark' style={signIn}>Alredy have an account? <span className='text-primary'> &nbsp; Sign in</span> </NavLink>

                        <div className="row mt-4">
                            <div className="col-md-6">
                                <input
                                    type='text'
                                    name='fname'
                                    id='fname'
                                    placeholder='First name'
                                    className='form-control'
                                    value={input.fname}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type='text'
                                    name='lname'
                                    id='lname'
                                    placeholder='Last name'
                                    className='form-control'
                                    value={input.lname}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <p></p>
                        <input
                            type="email"
                            name='email'
                            id='email'
                            placeholder='E-mail'
                            className='form-control'
                            value={input.email}
                            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                        />
                        <p></p>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    type="password"
                                    name='password'
                                    id='password'
                                    placeholder='password'
                                    className='form-control'
                                    value={input.password}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6">
                                <input
                                    type="password"
                                    name='cpassword'
                                    id='cpassword'
                                    placeholder='confirm password'
                                    className='form-control'
                                    value={input.cpassword}
                                    onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                                />
                            </div>
                        </div>
                        <p></p>
                        <button className='btn btn-primary w-100 mt-3' >Sign up </button>
                        <span style={singIcone} ><i className="fa fa-arrow-right" aria-hidden="true" /> </span>
                        <br />
                        <input type="checkbox" name="terms" id="terms" className='text-capitalize'/> I have read and agree to the <span className='text-primary'> Terms of Service</span> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register

