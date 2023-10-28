        import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const history = useNavigate()
    const token = sessionStorage.getItem("signature");
    const [email, setEmailid] = useState([]);
    const [password, setpassword] = useState([]);

    const login =
    {
        email: email,
        password: password
    }

    const handleClick = async () => {
        try {
            await axios.post(
                "http://localhost:8000/customer/login",
                login,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            alert("Login successful");
            history("/")
            window.location.reload(false);
        } catch (error) {
            console.log(error);
            alert("invalid credentials");
        }
    }
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h6>Almost There</h6>
                <div data-bs-dismiss="modal"><i className="bi bi-x" style={{ cursor: 'pointer' }}></i></div>
            </div>
            <p style={{ font: "small" }}>
                Enter your email and password to place order
            </p>
            <input
                type="email"
                className="form-control my-3 py-2 border"
                placeholder="email id"
                value={email}
                onChange={(e) => setEmailid(e.target.value)}

            />
            <input
                type="password"
                className="form-control my-3 py-2 border"
                placeholder="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
            />
            <div
                className={`AddItems-btn text-center px-3 py-2 fw-bold`}
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >
                Login
            </div>
        </div>
    )
}

export default Login