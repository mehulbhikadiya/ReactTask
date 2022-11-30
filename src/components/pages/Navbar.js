import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/logo.png'

const Navbar = () => {
    const navigate = useNavigate();

    const userName = JSON.parse(localStorage.getItem('user'));

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedin');
        navigate('/login');
    }
  
    return (
        <div>
            <div className="container mt-5">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <Link className="navbar-brand" to="#">
                        <img src={logo} alt="logoimg" className="d-inline-block align-middle " width='50' height='50' />DEMO</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">

                        <div className="navbar-nav" style={{ paddingLeft: '25px' }}>
                            <Link to='/home' className='nav-link nav-item menu_activ'  >Home</Link>



                            <div className="dropdown" style={{ paddingRight: '40px' }}>
                                <button className="dropbtn nav-item nav-link menu_activ">
                                    <i class="fa fa-user-circle" aria-hidden="true"></i>
                                    &nbsp; {userName.name}
                                </button>
                                <div className="dropdown-content">
                                    <Link to="#" onClick={handleLogout} >
                                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                                        &nbsp;Logout
                                    </Link>
                                    {/* <button className='btn btn-primary my-2 mx-auto d-flex justify-content-center'
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>
                <div className="contain-div mt-5  ">
                    <h5 className='text-center text-capitalize'>
                        welcome to {userName.name}  </h5>
                    <hr className='w-25 mx-auto' />
                </div>
                <div className="data mt-5">
                    <h5 className='text-center text-capitalize text-danger' style={{ fontSize: '18px' }}> Click on the home page in Navbar to view countries data!</h5>
                </div>
                <div className="text-center">
                    <h5 className='text-center text-capitalize text-danger' style={{ fontSize: '17px' }}>  Click on the username to logout.</h5>
                </div>
            </div>
        </div>
    )
}

export default Navbar