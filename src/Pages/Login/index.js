import React from 'react'
import { MdRemoveRedEye } from "react-icons/md";
import "./style.css"

export default function Login() {
    return (
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
                            />
                            <label>
                                <p>Password</p>
                            </label>
                            <span style={{ position: "relative" }}>
                                <input
                                    id=""
                                    placeholder="Password"
                                    type={"password"}
                                />
                                <MdRemoveRedEye
                                    style={{
                                        position: "absolute",
                                        top: "calc(50% - 7.5px)",
                                        left: "90%",
                                    }}
                                />
                            </span>
                            <button className="signup-button">
                                Sign Up
                            </button>
                            <button className="Login-button">
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
