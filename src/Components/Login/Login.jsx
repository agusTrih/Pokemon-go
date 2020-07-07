// Import segala hal yang di butuhkan
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PokemonGo from "../../assets/images/pokegaul.jpg";
import Styled from "styled-components";

const FlexColumn = Styled.div`
display: flex;
flex-direction: column;
`;
const Input = Styled.input`
padding: 10px;
font-size: 20px;
margin-bottom: 5px;
`;
const Form = Styled.form`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-content: center;
`;
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
            <Form onSubmit={handleSubmit}>
                <div>
                    <img src={PokemonGo} alt="pokegaul" />
                </div>
                <FlexColumn>
                    <h2>Email:</h2>
                    <Input
                        name="email"
                        id="email"
                        type="text"
                        value={userLogin.email}
                        onChange={handleChange}
                    />
                    <h2>Password: </h2>
                    <Input
                        name="password"
                        id="password"
                        type="password"
                        value={userLogin.password}
                        onChange={handleChange}
                    />
                    <Input type="submit" value="Log in" />
                </FlexColumn>
            </Form>
        </div>
    );
}

export default Login;
