import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="footer">
            <ul className="liens">
                <li>
                    <Link className="login-register" to="/login">Login or Register</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;