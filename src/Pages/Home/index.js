import React from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import './style.css';

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className='home-title'>
                <h1>
                    <u><i>Teacher Table</i></u>
                </h1>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>1</td>
                        <td>Zaynab</td>
                        <td>zaynab.abdalnabi@gmail.com</td>
                        <td>71-728-733</td>


                    </tr>
                    <tr className="active-row">
                        <td>2</td>
                        <td>Hadi</td>
                        <td>hadi.hayek@gmail.com</td>
                        <td>71-728-733</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}
