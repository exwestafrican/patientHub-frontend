import { Navigate } from "react-router-dom";
import { User } from "../../model/user"
import { ROLES } from "../../utils/constants";


export default function AdminRoute({ children }) {
    const isLoggedInAdmin = User.isLoggedIn() && User.hasRole(ROLES.HOSPITAL_ADMIN);
    return isLoggedInAdmin ? children : <Navigate to="/" />
}