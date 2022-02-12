import "./style.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";

import Home from "./app/layout/Home";




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