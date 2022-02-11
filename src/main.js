import "./style.scss";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import PromotionCards from "./app/component/PromotionCards";






render(<>
    <NavBar />
    <section class="providers" id="providers">
        <PromotionCards />
    </section>




</>, document.getElementById('root'));