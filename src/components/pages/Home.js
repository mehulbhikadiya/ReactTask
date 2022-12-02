import React, { useEffect, useState } from 'react'

const Home = () => {

    const [users, setUsers] = useState([]);

    const [search, setSearch] = useState('');


    const fetchData = async () => {
        const response = await fetch("https://restcountries.com/v2/all");
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {
        fetchData()
    }, []);

    // const tableStyle = {
    //     marginLeft: '300px'
    // }
    
    return (
        <div className=' mt-5 home-bg' >

            <h4 className='text-center text-capitalize'>countries Data table </h4>
            <hr className='w-25 mx-auto' />

            <div className="serch-bar text-center mt-5">
                <form className="mx-auto d-flex justify-content-center " action="#"  >
                    <div className="form-group has-search">
                        <span className="fa fa-search form-control-feedback"></span>
                        <input
                            type="text"
                            className="form-control "
                            placeholder="Search country..."
                            onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </form>
            </div>

            <div className="data-list mt-5 mx-5">
                <table className='table table-hover center '  >
                    <thead className='thead-dark bg-dark text-light '>
                        <tr>
                            <th rowSpan="2">Name</th>
                            <th rowSpan="2">No. of country</th>
                            <th colSpan="3" className='text-center'>Currency</th>

                        </tr>
                        <tr >
                            <td>Code</td>
                            <td >Name</td>
                            <td>Symbol</td>
                        </tr>
                    </thead>
                    {
                        users.filter((user) => user.name.toLowerCase().includes(search)).map((user) => {

                            return (
                                <tbody>
                                    <tr key={user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.capital}</td>
                                        {
                                            user?.currencies?.map((item) => {
                                                return (
                                                    <>
                                                        <td>{item.code}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.symbol}</td>
                                                    </>
                                                )
                                            })
                                        }

                                    </tr>
                                </tbody>
                            )
                        }
                        )
                    }
                </table>

            </div>
        </div>
    )
}

export default Home




