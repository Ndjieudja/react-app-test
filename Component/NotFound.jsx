import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="404">
            <h2 className="title-notfound">Ooooopssss....</h2>
            <p>La page rechercher n'existe pas</p>
            <Link to="/">Allez a la page d'acceuill..</Link>
        </div>
     );
}
 
export default NotFound;