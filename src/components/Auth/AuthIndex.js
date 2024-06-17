import { Fragment, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink, useParams,useLocation,useNavigate  } from "react-router-dom"
import Loader from "../UI/Loader";
import { loginWithEmailAndPassword, signupWithEmailAndPassword } from "../../actions/auth";
const AuthIndex = () =>{
    const params = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [details, setDetails] = useState({
        email: "",
        password: ""
    });
    const [loader, setLoader] = useState(false);
    const handleInput = e => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        return () => {
            setLoader(false)
            setDetails({
                email: "",
                password: ""
            })
        }
    }, [])
    const handleReplace = () => {
        navigate("/", { replace: true });
      };
    const handleSubmission = e => {
        e.preventDefault();
        if(location.pathname === "/signup") {
            setLoader(true)
            dispatch(signupWithEmailAndPassword(details, data => {
                if(data.error) {
                    console.log(data.error)
                    alert("Some error occurred")
                }
                else {
                    console.log("Successfully Signed up!")
                    handleReplace();
                }
                setLoader(false)
            }))
        }
        else if (location.pathname === "/login") {
            setLoader(true)
            dispatch(loginWithEmailAndPassword(details, data => {
                if(data.error) {
                    console.log(data.response)
                    alert(data?.response?.data?.error?.message || "Some error occurred")
                }
                else {
                    console.log("Successfully Logged in!")
                    handleReplace()
                }
                setLoader(false)
            }))
        }
    }
    return (
        <>
        <div className="auth-container">
               <div className="auth-container--box">
                    <div className="tab-selector">
                        <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                        <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
                    </div>
                    <form autoComplete={"off"} 
                    onSubmit={handleSubmission}
                    >
                        <div className="input-wrap">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text" 
                                name="email" 
                                placeholder="Enter Email" 
                                 value={details.email} 
                                 onChange={handleInput}
                            />
                        </div>
                        <div className="input-wrap">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter Password" 
                                 value={details.password}
                                 onChange={handleInput}
                            />
                        </div>
                        <div className="button-wrap">
                            <button className="login-btn">
                                {location.pathname === "/login" ? "Login" : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
        </div>
        { loader && <Loader/> }
        </>

    )
}

export default AuthIndex