import { Navigate} from "react-router-dom"

export function SignOut () {   
    localStorage.removeItem('token')

    if (window.location.href.indexOf('reload')===-1) {
        window.location.replace(window.location.href+'?reload');
   }
   
   return <Navigate to="/"/>
}