import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import './style.css';
import axios from 'axios';

export default function Home() {

    const [teacher, setTeacher] = useState([]);

    useEffect(() => {
        getTeachers();
    }, [teacher]);
    const getTeachers = () => {
        axios.get('http://localhost:8000/api/teacher')
            .then((res) => {
                setTeacher(res.data.data)
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <Navbar />
            <div className='home-title'>
                <h1>
                    <u><i>Teachers Table</i></u>
                </h1>
            </div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Of Birthday</th>
                    </tr>
                </thead>
                <tbody>

                    {teacher.map((item, index) => {
                        return (
                            <tr className="active-row" key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.date_of_birth}</td>
                            </tr>
                        )

                    })}

                </tbody>
            </table>
        </div>
    )
}
