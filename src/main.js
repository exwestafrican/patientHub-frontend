import "./style.scss";
import 'regenerator-runtime/runtime'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import Home from "./app/layout/Home";
import Footer from "./app/component/Footer";
import Login from "./app/layout/Login";


import HospitalRegistration from "./app/layout/HospitalRegistration";
import AdminRegistration from "./app/layout/AdminRegistration";






// Example POST method implementation:
function App() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/hospitalreg" element={<HospitalRegistration />} />
                    <Route exact path="/registrtion" element={<AdminRegistration />} />
                    <Route exact path="/doctor-registration" element={<Login />} />
                </Routes>
                <Footer />
            </ div>
        </>
    )
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
