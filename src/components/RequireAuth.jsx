import { useSelector } from "react-redux";
import {
    Navigate,
    Outlet,
} from "react-router-dom";

// export function RequireAuth({ redirectTo, children }) {
//     // const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

//     var isAuthenticated
//     if (localStorage.getItem("token") === null) {
//         isAuthenticated = false
//     } else {
//         isAuthenticated = true
//     }

//     return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
// }

export function RequireAuth({ redirectTo, children }) {
    const token = localStorage.getItem("token")
    console.log(token)

    if (token === "" || token === null) {
        <Navigate to={redirectTo} replace />
    }

    return children;
}