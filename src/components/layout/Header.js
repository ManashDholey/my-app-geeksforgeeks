import Cart from "../Cart/index"
import SearchBox from "../UI/SearchBox"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../actions/auth"
export const Header = ({cartItems,onEventQueue}) => {
    const navigate = useNavigate();
    const authState = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <>
           <header>
        <div className="nav-brand">
            <a to="/">
                <span>ManashKart</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="30"
                    height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="6" cy="19" r="2" />
                    <circle cx="17" cy="19" r="2" />
                    <path d="M17 17h-11v-14h-2" />
                    <path d="M6 5l14 1l-1 7h-13" />
                </svg>
            </a>
        </div>
        <div className="searchBox-container">
        <SearchBox/>
            {/* <form>
                <input name="search" type="text"
                    id="search" placeholder="Enter product name, category" />
                <button type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                        height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none"
                        strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </button>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="20"
                height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
            </svg> */}
        </div>
            { 
                authState && authState.idToken ?
                    <div className="user-actions">
                        <div className="user">
                            {/* <button title="User Profile" className="material-icons">account_circle</button> */}
                        </div>
                        <button onClick={logoutHandler} title="Logout" className="btn btn-info" >logout</button>
                    </div>
                :
                <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
            }
        
        <div className="cart-container">
            <Cart />
        </div>
    </header>
        </>
    )
}