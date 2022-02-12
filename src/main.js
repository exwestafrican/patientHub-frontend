import "./style.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
<<<<<<< HEAD

import Home from "./app/layout/Home";
=======
import PromotionCards from "./app/component/PromotionCards";
import HospitalRegForm from "./app/component/HospitalRegForm";
>>>>>>> cd7ff7d (adding to hospital reg form)




// Example POST method implementation:
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/dist/" element={<Home />} />
            </Routes>
        </>
    )
}


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));
