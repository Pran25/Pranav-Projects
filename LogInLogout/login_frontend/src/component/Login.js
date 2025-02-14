import React, { useState, useEffect } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
       
        if (localStorage.getItem("authToken")) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        
        const userData = { email, password };

        try {
            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
              
                const data = await response.json();
                localStorage.setItem("authToken", data.token); 
                setIsLoggedIn(true);
                window.location.href = "/dashboard";  
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLogout = () => {
      
        localStorage.removeItem("authToken");
        setIsLoggedIn(false);
        window.location.href = "/login";  
    };

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
                    <input  type="password"  placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <div>
                    <h2>You are logged in</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
};

export default Login;
