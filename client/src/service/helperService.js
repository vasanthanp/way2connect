import { Redirect } from "react-router";

const helperService = {
    checkLogin : () => {
        const isLogin = localStorage.getItem("user");
        const {pathname} = window.location;
        if(!isLogin 
            && 
            (pathname!=='/login' || pathname!=='/signup')
        )
        {
            return <Redirect to="/login" />
        }
    } 
}
export default helperService