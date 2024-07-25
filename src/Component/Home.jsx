import BlogList from "./BlogkList";
import useFetch from "./useFetch";

const Home = () => {
    // initiation des donner

    // creation d'un hooks 
    const  {data : blogs, islogin , error, setData} = useFetch("http://localhost:8000/blogs?_sort=id&_order=desc")

    const handleDelete = (id) => {
        console.log('onclick')
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setData(newBlogs);
    }  

    return (
        <div className="home">
            <div className="bloglist">
                {error && <div style={{color: 'red'}}>{error}</div>}
                {islogin && <div>En cours de traitement...</div>}
                {blogs && <BlogList blogs={blogs} title={"Liste de blog"} handelDelete={handleDelete} />}
                {/* <BlogList blogs={blogs} handleDelete={handleDelete} /> */}
                {/* <BlogList blogs={blogs.filter((blog)=>blog.id === 2)} /> */}
            </div>
        </div>
    );
}

export default Home;