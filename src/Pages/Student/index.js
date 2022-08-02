import React from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import './style.css';

export default function Student() {
    return (
        <div>
            <Navbar />
            <div className='home-title'>
                <h1>
                    <u><i>Students Table</i></u>
                </h1>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Class</th>
                        <th> Gender</th>
                        <th>
                            <button className='btn-bi'> Add a student</button>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>1</td>
                        <td>Mohamad</td>
                        <td>Mohamad.matar@gmail.com</td>
                        <td>1998-2-24</td>
                        <td>EB7</td>
                        <td>Male</td>

                        <td className='edit-delet-icon'>
                            <AiOutlineEdit />
                            <tr>
                                <RiDeleteBin6Line />

                            </tr>
                        </td>

                    </tr>
                    <tr className="active-row">
                        <td>2</td>
                        <td>Zaynab</td>
                        <td>zaynab.abdelnabi@gmail.com</td>
                        <td>1998-2-24</td>
                        <td>EB5</td>
                        <td>Female</td>
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
