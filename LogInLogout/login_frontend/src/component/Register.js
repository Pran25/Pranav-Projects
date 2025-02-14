import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleregister = async (e) => {
        e.preventDefault();

        const user = { email, password };

        try {
            const response = await fetch("http://localhost:8080/user/reg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const result = await response.text();

            if (response.ok) {
                setMessage("Registration successful!");
            } else {
                setMessage(`Error: ${result}`);
            }
        } catch (error) {
            setMessage("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow">
                        <h3 className="text-center mb-4">Create Account</h3>
                        {message && <div className="alert alert-info">{message}</div>}

                        <form onSubmit={handleregister}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    aria-label="Enter your email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    aria-label="Enter your password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>

                            <Link to="/login" className="btn btn-secondary w-100 mt-3">
                                Login
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
