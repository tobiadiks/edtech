import useAuth from "hooks/useAuth"
import SignInPage from "pages/auth/login"

const AuthGuard=(props:{children: any})=>{
const user=useAuth()
// console.log(user)
if (user.hasOwnProperty('token')){
    return props.children
}
else {
    return <SignInPage/>;
}

}

export default AuthGuard;