import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DataTable = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=1")
            .then(res => {
                console.log(res.data)
                setData(res?.data?.data)
            })
            .catch((err) => {
                alert('Something Went Wrong')
            })
    }, []);

    return (
        <div>
            <h1> Data Table </h1>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </table>{
                data.length > 0 &&
                data.map((item) => {
                    return (
                        <table>
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.email} </td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>

                            </tr>

                        </table>
                    )
                })

            }
        </div>
    )
}

export default DataTable
