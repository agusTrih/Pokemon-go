import React, { useState } from "react";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // FUNCTION

    const handleSubmit = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="text">Username</label>
                <input
                    name="user"
                    id="text"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="text" value={password}>
                    Password
                </label>
                <input
                    name="password"
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <input type="submit" value="kirim" />
            </form>
        </div>
    );
}

export default Login;
