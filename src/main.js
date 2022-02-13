import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import Home from "./app/layout/Home";
import HospitalRegistrationForm from "./app/component/HospitalRegForm"





function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/hospitalreg" element={<HospitalRegistrationForm />} />
            </Routes>
        </>
    )

}

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
