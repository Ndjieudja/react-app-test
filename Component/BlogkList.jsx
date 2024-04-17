import { Link } from "react-router-dom";

const BlogList = ({ blogs}) => {

    return (
        blogs.map((blog) => (
            <div className="blog" key={blog.id}>
                <div className="blog-title">
                    <Link to={`/blogs/${blog.id}`} className="blog-title">{blog.title}</Link>
                    <small className="blog-description-date">Publier le ... {blog.date}</small>
                    <p className="blog-author">Publier par... {blog.author}</p>
                </div>
            </div>
        ))
    );
}

export default BlogList;