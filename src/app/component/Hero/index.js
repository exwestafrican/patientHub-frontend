import { Link } from "react-router-dom";
import Button from "../Button";
import "./hero.scss";

export default function Hero() {
    return (
        <div className="flex-box">
            <div >
                <img alt="hero" src="https://res.cloudinary.com/dbvcrlwbo/image/upload/v1644766934/mo-NKhckz9B78c-unsplash_o3omfv.jpg" className="d-block mx-lg-auto img-fluid" width="500" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6 content-spacing">
                <h1 className="display-5 fw-bold  mb-3 lineSpacing">Medical Care With The Click Of A Button.</h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Button text={"Subscribe"} background={"transparent"} />
                    <Link to={"/hospitalreg"}>
                        <Button text={"Hospital registration"} background={"green"} />
                    </Link>

                </div>

            </div>

        </div>
        // <div className="col-xxl-8 px-4 py-5">
        //     <div className="row flex-lg-row-reverse   align-items-center g-5 py-5">
        //         <div className="col-10 col-sm-8 col-lg-6">
        //             <img alt="hero" src="https://res.cloudinary.com/dbvcrlwbo/image/upload/v1644766934/mo-NKhckz9B78c-unsplash_o3omfv.jpg" className="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy" />
        //         </div>
        //         <div className="col-lg-6">
        //             <h1 className="display-5 fw-bold  mb-3 lineSpacing">Medical Care With The Click Of A Button.</h1>
        //             <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        //             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        //                 <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
        //                 <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}