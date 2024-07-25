import { useState } from "react";

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const valideFunction = () => {
        return email.length > 0 && password > 0;
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
    }


    return (
        <div className="create-blog">
            <form onSubmit={handelSubmit} className="form">
                <div className="form-group">
                    {/* <label htmlFor="title">Login</label> */}
                    <input
                        type="text"
                        placeholder="Email"
                        className="form-control"
                        id="login"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required />
                </div>

                <div className="form-group">
                    {/* <label htmlFor="author">Password</label> */}
                    <input
                        type="text"
                        placeholder="Password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required />
                </div>
                <div className="form-group">
                    { !isLoading && <button type="submit" className="btn-create">Login</button>}
                    { isLoading && <button type="submit" className="btn-create" disabled>En cour de traitement ...</button>}
                </div>
            </form>
        </div>
    );
}

export default Login;