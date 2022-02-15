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
                <p className="lead"> Even Medics need a little bit of care. Quickly book in patient appoinments, prescription refile reminders, manage and migrate patient history inter and intra hospital, seemlessly track down patients family medical history. Your tech aid for all the little things. Plus, the first 3 months is on us.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <Button text={"Subscribe"} background={"transparent"} />

                    <button className="custombtn green-background">
                        <Link to={"/hospitalreg"}>
                            <span className="no-decoration">Hospital registration</span>
                        </Link>
                    </button>


                    {/* <Button text={"Hospital registration"} background={"green"} /> */}



                </div>
            </div>
        </div>

    )
}