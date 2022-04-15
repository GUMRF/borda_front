import {
    Navigate,
    useNavigate,
} from "react-router-dom"

export function Logout() {
    localStorage.removeItem('token')

    if (window.location.href.indexOf('reload') === -1) {
        window.location.replace(window.location.href + '?reload');
    }

    return <Navigate to="/" />
}