import { Navigate, Route } from "react-router-dom";
import { User } from "../../model/user";

export default function ProtectedRoute({ children }) {
    const auth = User.isLoggedIn();
    return auth ? children : <Navigate to="/login" />;
}


