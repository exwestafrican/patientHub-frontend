import "./style.scss";
import 'regenerator-runtime/runtime'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import Home from "./app/layout/Home";



import HospitalRegistration from "./app/layout/HospitalRegistration";
import AdminRegistration from "./app/layout/AdminRegistration";
import DashboardHome from "./app/layout/DashboardHome";
import DoctorRegistration from "./app/layout/DoctorRegistration";
import UserLogin from "./app/layout/UserLogin";
import AdminRoute from "./app/component/AdminRoute";







// Example POST method implementation:
function App() {
    return (
        <>


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/login" element={<UserLogin />} />
                <Route exact path="/hospitalreg" element={<HospitalRegistration />} />
                <Route exact path="/registrtion" element={<AdminRegistration />} />
                <Route exact path="/doctor-registration" element={<DoctorRegistration />} />
                <Route exact path="/dashboard" element={
                    <AdminRoute>
                        <DashboardHome />
                    </AdminRoute>
                } />
            </Routes>


        </>
    )
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
