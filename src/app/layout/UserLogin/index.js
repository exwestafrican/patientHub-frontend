import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "../../component/Alert";
import EmailField from "../../component/EmailField";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import PasswordField from "../../component/PasswordField";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../utils/constants";
import { User } from "../../model/user";

export default function UserLogin() {
    const [error, setError] = useState(false);
    const { register, handleSubmit, formState, reset, setFocus } = useForm();
    const auth = useAuth();
    const navigate = useNavigate()

    // on submit do interesting things
    function onSubmit(data, e) {
        submitDataToBackend(data);
    }

    function navigateToDestination() {
        switch (User.role()) {
            case ROLES.HOSPITAL_ADMIN:
                navigate("/dashboard");
                break;
            default:
                navigate("/")
        }
    }

    async function submitDataToBackend(data) {
        const isAuthenticated = await auth.login(data);
        console.log(isAuthenticated);
        if (isAuthenticated) {
            console.log("i am authenticated");
            reset();
            navigateToDestination();
        } else {
            setError(true);
        }

    }
    return (
        <>
            <NavBar />
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="full-height form-signin center ">
                    <div className="login__item">
                        <h1 className="h3 mb-3 font-weight-normal">Login Here</h1>
                        {error && <Alert message={"invalid username or password"} />}
                        <EmailField labelName={"Email:"} name={"email"} placeholderExample={"Enter your email"} register={register} validators={
                            {
                                required: "Please provide a last name"
                            }
                        } />
                        <p className="wrong_input">{formState.errors.email?.message}</p>
                        <PasswordField labelName={"Password:"} name={"password"} placeholderExample={"Enter a Password"} register={register} validators={
                            {
                                required: "Please provide a password"
                            }
                        } />
                        <p className="wrong_input">{formState.errors.password?.message}</p>
                        <button className="btn btn-lg btn-primary btn-block mt-4" type="submit">Login</button>
                    </div>

                </form>
            </div>
            <Footer />
        </>
    )
}