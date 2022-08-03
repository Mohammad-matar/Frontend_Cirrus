import React, { useEffect, useState } from 'react';
import Navbar from '../../Component/Navbar';
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from "react-icons/ri"
import ReactCircleModal from 'react-circle-modal'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/styles';
import './style.css';
import axios from 'axios';
import { GiConsoleController } from 'react-icons/gi';

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

    const [newstudent, setnewStudent] = useState({});
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleOpenEdit = () => setOpenEdit(true);
    const handleClose = () => setOpen(false);
    // Get the Data on Edit
    const getStudentsById = (id) => {
        axios
            .get(`http://localhost:8000/api/student/${id}`)
            .then((res) => {
                const { name, email, date_of_birth, gender } = res.data;
                console.log(res)
                setnewStudent({ name, email, date_of_birth, gender });
            })
            .catch((err) => console.log(err));
    }

    const updatenewStudent = () => {
        axios
            .put(`http://localhost:8000/api/student/${newstudent.id}`, newstudent)
            .then((res) => {
                handleClose();
                setnewStudent({});
                getStudents();
                alert("Student updated successfully");
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
                                    <AiOutlineEdit
                                        onClick={() => {
                                            handleOpen();
                                            getStudentsById(student.id);
                                            // updatenewStudent();
                                        }} />
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Edit your Customer
                                            </Typography>
                                            <br />
                                            <TextField id="filled-basic" label="Name" name="name" variant="filled" defaultValue={newstudent.name} onChange={handleChange} />
                                            <br />
                                            <br />
                                            <TextField id="filled-basic" label="address" name="address" variant="filled" defaultValue={newstudent.address} onChange={handleChange} />
                                            <br />
                                            <br />
                                            <TextField id="filled-basic" label="Phone Number" name="phone_number" variant="filled" defaultValue={newstudent.phone_number} onChange={handleChange} />
                                            <br />
                                            <br />
                                            <Button variant="contained" onClick={setnewStudent} >Update Data</Button>
                                        </Box>
                                    </Modal>
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
