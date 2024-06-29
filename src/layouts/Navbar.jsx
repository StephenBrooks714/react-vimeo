import {Link} from "react-router-dom";
import "../styles/index.css";

export default function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-light-shadow-transparent-gradient-shadow">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>
                        <img src={"https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg"}
                             height={"40"}
                             width={"40"}
                             loading={"lazy"}
                             alt="bootstrap"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to={"/login"} className={"nav-link"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}