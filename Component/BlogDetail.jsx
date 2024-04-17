import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import UseFetch from "./useFetch";


const BlogDetail = () => {
    const { id } = useParams();
    const { data: blogs, islogin, error } = UseFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/" + id, {
            method: "DELETE"
        }).then(() => {
            console.log('record was deleted')
            history.push('/')
        })
    }

    return (
        <div className="detail-blog">
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {islogin && <div>En cours de traitement...</div>}
            {blogs && (<div className="blog">
                <h2 className="blog-title">{blogs.title}</h2>
                <small className="blog-publication-date">{`publier le: ${blogs.date}`}</small>
                <p className="blog-body">{blogs.body}</p>
                <p className="blog-author">{`publier par:${blogs.author}`}</p>
                <button className="delete" onClick={handleDelete}>Delete</button>
            </div>
            )}
        </div>);
}

export default BlogDetail;