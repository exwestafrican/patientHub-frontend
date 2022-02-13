import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import Home from "./app/layout/Home";
import PromotionCards from "./app/component/PromotionCards";
import HospitalRegForm from "./app/component/HospitalRegForm";




// Example POST method implementation:
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
