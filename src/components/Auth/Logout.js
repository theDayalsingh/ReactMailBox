// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../Store/storeContext";
import { useDispatch } from "react-redux";
import { authActions } from "../redux-store/authSlice";
import Button from "react-bootstrap/Button";

export default function Logout(){
    // const authCtx = useContext(AuthContext)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const logoutHandler = () => {
        // authCtx.logout();
        dispatch(authActions.logout())
        navigate('/')
      };
    
return(
    <Button onClick={logoutHandler}>Logout</Button>
)
}