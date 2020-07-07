// Import segala hal yang di butuhkan
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
    // deklarsikan useHistory dan userlogin yang berisi objek
    const history = useHistory();
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: "",
    });

    // FUNCTION

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userLogin.email !== "" && userLogin.password !== "") {
            localStorage.setItem("userLogin", JSON.stringify(userLogin));
            history.push("/pokemon");
        }
    };

    const handleChange = (event) => {
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value,
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Username</label>
                <input
                    name="email"
                    id="email"
                    type="text"
                    value={userLogin.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    value={userLogin.password}
                    onChange={handleChange}
                />
                <input type="submit" value="kirim" />
            </form>
        </div>
    );
}

export default Login;
