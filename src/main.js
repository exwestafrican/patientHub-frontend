import "./style.scss";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import PromotionCards from "./app/component/PromotionCards";
import HospitalRegForm from "./app/component/HospitalRegForm";





render(<>
    <NavBar />
    <HospitalRegForm/>
    <section className="providers" id="providers">
        <PromotionCards />
    </section>
    



</>, document.getElementById('root'));