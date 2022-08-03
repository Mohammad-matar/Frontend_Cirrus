import React from 'react';
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MdRemoveRedEye } from "react-icons/md";
import axios from "axios";
import "./style.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloggedIn, setLoggedIn] = useState(false);
    const [passwordShow, setPasswordShow] = useState(true);



    const Login = async (event) => {
        event.preventDefault();
        let data = { email, password };
        await axios
            .post("http://localhost:8000/api/teacher/login", data)
            .then((res) => {
                setLoggedIn(true);
            })
            .catch((err) => {
                console.log("error ", err.response.data.err);
            });
    };

    return (
        <>
            {isloggedIn ? (
                <Navigate to="/home" />
            ) : (

                <div className='login-main-container'>
                    <div className="main-login">
                        <div className="wrapper">
                            <div className="login-div-center">
                                <form className="form-login">
                                    <div className="buttons">
                                        <div className="close"></div>
                                        <div className="minimize"></div>
                                        <div className="zoom"></div>
                                    </div>
                                    <h2>Login Form</h2>
                                    <label>
                                        <p>Username</p>
                                    </label>
                                    <input
                                        id=""
                                        placeholder="email"
                                        type={"email"}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}

                                    />
                                    <label>
                                        <p>Password</p>
                                    </label>
                                    <span style={{ position: "relative" }}>
                                        <input
                                            id=""
                                            placeholder="Password"
                                            type={passwordShow ? "password" : "text"}
                                            onChange={(e) => {
                                                setPassword(e.target.value);
                                            }}

                                        />
                                        <MdRemoveRedEye
                                            style={{
                                                position: "absolute",
                                                top: "calc(50% - 7.5px)",
                                                left: "90%",
                                            }}
                                            onClick={() => {
                                                setPasswordShow(!passwordShow);
                                            }}

                                        />
                                    </span>
                                    <button className="signup-button">
                                        Sign Up
                                    </button>
                                    <button className="Login-button" onClick={Login}>
                                        Login
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
