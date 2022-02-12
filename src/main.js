import "./style.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import Home from "./app/layout/Home";
import HospitalRegistrationForm from "./app/component/HospitalRegForm"





function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/dist/" element={<HospitalRegistrationForm />} />
                <Route path="/dist/hospitalreg" element={<HospitalRegistrationForm />} />
            </Routes>
        </>
    )

}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
