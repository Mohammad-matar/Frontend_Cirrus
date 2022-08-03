import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactCircleModal from 'react-circle-modal'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './style.css';
import axios from 'axios';

export default function Student() {
    const [student, setStudent] = useState({});
    const [students, setStudents] = useState([]);


    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
        console.log(student)
    };

    useEffect(() => {
        getStudents()
    }, []);

    const getStudents = () => {
        axios.get('http://localhost:8000/api/student')
            .then((res) => {
                setStudents(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    const deleteStudent = (id) => {
        axios
            .delete(`http://localhost:8000/api/student/${id}`)
            .then((res) => {
                alert("Student deleted successfully");
                getStudents()
            })
            .catch((err) => console.log(err));
    };

    const addStudent = async () => {
        await axios
            .post(`http://localhost:8000/api/student`, student)
            .then((res) => {
                console.log(res);
                setStudent({});
                alert("Student added successfully");
                getStudents()
            })
            .catch((err) => console.log(err));
    };

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
                            <ReactCircleModal

                                backgroundColor="rgb(0, 15, 58)"
                                toogleComponent={onClick => (
                                    <button onClick={onClick} className="btn-bi">
                                        Add a student
                                    </button>
                                )}
                                offsetX={0}
                                offsetY={0}
                            >
                                {(onClick) => (
                                    <div style={{ backgroundColor: '#fff', padding: '2em' }} className="mui-textfields">
                                        <Box
                                            component="form"
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                flexDirection: "column",
                                                height: "30vh"

                                            }}
                                        >
                                            <div className='mui5-textfield-input'>
                                                <TextField
                                                    required
                                                    id="name"
                                                    label="* Name"
                                                    name='name'
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    label="* email"
                                                    name='email'
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    required
                                                    id="password"
                                                    label="* password"
                                                    type={"password"}
                                                    name='password'
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    required
                                                    id="date_of_birth"
                                                    label="* Date Of Birth"
                                                    name='date_of_birth'
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    required
                                                    id="class"
                                                    label="* Class"
                                                    name="class"
                                                    onChange={handleChange}
                                                />
                                                <TextField
                                                    required
                                                    id="gender"
                                                    label="* Gender"
                                                    name='gender'
                                                    onChange={handleChange}
                                                />

                                            </div>
                                        </Box>
                                        <div className='onclick-modal-button'>
                                            <button onClick={addStudent}>
                                                Sumbit
                                            </button>
                                            <button onClick={onClick}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </ReactCircleModal>


                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        return (
                            <tr className="active-row" key={index}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.date_of_birth}</td>
                                <td>{student.class}</td>
                                <td>{student.gender}</td>

                                <td className='edit-delet-icon'>
                                    <AiOutlineEdit />
                                    <tr>
                                        <RiDeleteBin6Line
                                            onClick={() => deleteStudent(student.id)} />

                                    </tr>
                                </td>

                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}
