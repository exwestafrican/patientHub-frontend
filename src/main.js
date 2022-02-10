import "./style.scss";
import { render } from "react-dom";
import NavBar from "./app/component/NavBar";
import Provider from "./app/component/Provider";

// const num = [{
//     ""
// }, {

// },]


class ProviderStuff {

    constructor(title, description) {
        this.title = title;
        this.description = description;

    }

}

const objs = [new ProviderStuff("New Age Hospital", "happy to be here with you guys"), new ProviderStuff("Dublin City Hospital", " always happy to be here with you guys")]
render(<>
    <NavBar />
    <section class="providers" id="providers">
        <div class="box-container">
            {
                objs.map((obj) => <Provider title={obj.title} description={obj.description} />)
            }

        </div>
    </section>




</>, document.getElementById('root'));