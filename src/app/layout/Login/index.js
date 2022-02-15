import "./login.scss"

import InputField from "../../component/InputField";
import { useForm } from "react-hook-form";


export default function Login() {
    const { register, handleSubmit, formState, reset } = useForm();

    return (
        <form className="full-height form-signin center ">
            <div class="login__item">
                <h1 class="h3 mb-3 font-weight-normal">Register Here</h1>
                <input type="text" id="inputLastName" class="form-control form-control-lg mb-3" placeholder="Last Name" />
                <input type="text" id="inputFirstName" class="form-control form-control-lg mb-3" placeholder="First Name" />
                <input type="text" id="inputPps" class="form-control form-control-lg mb-3" placeholder="PPS" />
                <input type="text" id="inputContactNo" class="form-control form-control-lg mb-3" placeholder="Contact Number" />
                <input type="email" id="inputEmail" class="form-control form-control-lg mb-3" placeholder="Email Address" />
                <input type="password" id="inputPassword" class="form-control form-control-lg mb-3" placeholder="Password" />
                <button class="btn btn-lg btn-primary btn-block mt-4" type="submit">Register</button>
            </div>

        </form>
    )
}