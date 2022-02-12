import "./style.scss";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import PromotionCards from "./app/component/PromotionCards";




// Example POST method implementation:



render(<>
    <NavBar />
    <section className="providers" id="providers">
        <PromotionCards />
    </section>




</>, document.getElementById('root'));