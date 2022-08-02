import React from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import './style.css';

export default function Homework() {
    return (
        <div>
            <Navbar />
            <div className='home-title'>
                <h1>
                    <u><i>Homework Table</i></u>
                </h1>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Assign By</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>1</td>
                        <td>
                            <select>
                                <option>Zaynab</option>
                                <option>Hadi</option>
                            </select>
                        </td>
                        <td>English</td>


                    </tr>
                    <tr className="active-row">
                        <td>2</td>
                        <td>
                            <select>
                                <option>Hadi</option>
                                <option>Zaynab</option>
                            </select>
                        </td>
                        <td>Arabic</td>

                    </tr>

                </tbody>
            </table>
        </div>
    )
}
