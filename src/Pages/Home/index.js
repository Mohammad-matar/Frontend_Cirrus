import React from 'react';
import Navbar from '../../Component/Navbar';
import { BiMessageSquareAdd } from 'react-icons/bi';
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>
                            <button className='btn-bi'> Add a student</button>

                            {/* <BiMessageSquareAdd className='btn-bi' /> */}
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>Zaynab</td>
                        <td>zaynab.abdalnabi@gmail.com</td>
                        <td>71-728-733</td>
                        <td className='edit-delet-icon'>
                            <AiOutlineEdit />
                            <tr>
                                <RiDeleteBin6Line />

                            </tr>
                        </td>

                    </tr>
                    <tr className="active-row">
                        <td>Hadi</td>
                        <td>hadi.hayek@gmail.com</td>
                        <td>71-728-733</td>
                        <td className='edit-delet-icon'>
                            <AiOutlineEdit />
                            <tr>
                                <RiDeleteBin6Line />

                            </tr>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}
