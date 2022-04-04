import "./login.scss"

import InputField from "../../component/InputField";
import { useForm } from "react-hook-form";
import Alert from "../../component/Alert";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";


export default function DoctorRegistration() {
    const { register, handleSubmit, formState, reset } = useForm();

    return (
        <>
            <NavBar />
            <div className="container">
                <form className="full-height form-signin center ">

                    <div className="login__item">

                        <h1 className="h3 mb-3 font-weight-normal">Register Here</h1>
                        <Alert message={"invalid username or password"} />
                        <input type="text" id="inputLastName" class="form-control form-control-lg mb-3" placeholder="Last Name" />
                        <input type="text" id="inputFirstName" class="form-control form-control-lg mb-3" placeholder="First Name" />
                        <input type="text" id="inputPps" class="form-control form-control-lg mb-3" placeholder="PPS" />
                        <input type="text" id="inputContactNo" class="form-control form-control-lg mb-3" placeholder="Contact Number" />
                        <input type="email" id="inputEmail" class="form-control form-control-lg mb-3" placeholder="Email Address" />
                        <input type="password" id="inputPassword" class="form-control form-control-lg mb-3" placeholder="Password" />
                        <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Register</button>
                    </div>

                </form>
            </div>
            <Footer />
        </>
    )
}