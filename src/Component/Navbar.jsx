import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar">
            <div>
                <Link className="logo" to="/">Bpro Blog</Link>
            </div>
            <ul className="liens">
                <li>
                    <Link to="/" className="lien">Acceuil</Link>
                </li>
                <li>
                    <Link className="ArticleStyle" to="/add">Crée Article</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;