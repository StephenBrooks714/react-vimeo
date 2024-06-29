import React from "react";
import Navbar from "../layouts/Navbar";
import {useState} from "react";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password);
    };

    return (
        <>
            <Navbar />
            <section className={"container"} style={{marginTop: "150px"}}>
                <div className={"row justify-content-center align-items-center"}>
                    <div className={"col-lg-6 col-md-8 col-sm-10"}>
                        <h1>User Login</h1>
                        <form onSubmit={handleLogin} method="post">
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" onChange={ (e) => setEmail(e.target.value)} value={ email} id="email" aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" onChange={ (e) => setPassword(e.target.value)} value={ password} className="form-control" id="password"/>
                            </div>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
