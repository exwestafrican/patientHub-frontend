import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailField from "../EmailField";
import InputField from "../InputField";
import { useQuery } from "../../Hooks/useQuery";
import { hospitalAdminService } from "../../Services/HospitalAdminService";
import { useNavigate } from "react-router-dom";
import Alert from "../Alert";
import PasswordField from "../PasswordField";
import cleanData, { matchingStrings } from "../../utils/general";

export default function AdminRegForm() {
    const query = useQuery();
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonVaule, setbuttonVaule] = useState("Register Admin");
    const navigate = useNavigate()


    const { register, handleSubmit, formState, reset, setFocus } = useForm();



    function onSubmit(data, e) {
        const passwordMatch = matchingStrings(data.password, data.confirmPassword);
        if (passwordMatch) {

            // set default gender
            data["gender"] = "not specified";
            delete data.confirmPassword;
            console.log(data);
            submitDataToBackend(data);
        } else {
            setErrorMessage("Password provided don't match");
            setFocus("password");
        }

    }

    async function submitDataToBackend(data) {
        setbuttonVaule("Submitting....")
        const eirCode = query.get("eirCode")
        try {
            const cResp = await hospitalAdminService.signup(data, eirCode)
            if (cResp.ok()) {
                reset()
                navigate("/")
            } else {
                const msg = cResp.getErrorMessage();
                console.log(msg)
                setErrorMessage(msg);
                setbuttonVaule("Try Again");
            }
        } catch (error) {
            setErrorMessage("Something went wrong")
            console.log(error)
        }


    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-control-lg col-12 col-lg-5">
            {errorMessage && <Alert message={errorMessage} />}
            <InputField labelName={"Last Name:"} name={"lastName"} placeholderExample={"Enter a Last Name"} register={register} validators={
                {
                    required: "Please provide a last name", maxLength: {
                        value: 15,
                        message: "last name cannot exceed 15 characters"
                    }
                }
            } />
            <p>{formState.errors.lastName?.message}</p>
            <InputField labelName={"First Name:"} name={"firstName"} placeholderExample={"Enter a First Name"} register={register} validators={
                {
                    required: "Please provide a first name", maxLength: {
                        value: 15,
                        message: "first name cannot exceed 15 characters"
                    }
                }
            } />
            <p>{formState.errors.firstName?.message}</p>
            <InputField labelName={"Contact Number:"} name={"contactNum"} placeholderExample={"Enter a Contact Number"} register={register} validators={
                {
                    required: "Please provide a contact number", maxLength: {
                        value: 15,
                        message: "contact number cannot exceed 15 characters"
                    }
                }
            } />
            <p>{formState.errors.contactNum?.message}</p>


            <EmailField labelName={"Email:"} name={"email"} placeholderExample={"Enter an Email"} register={register} validators={
                {
                    required: "Please provide an email", maxLength: {
                        value: 25,
                        message: "email cannot exceed 25 characters"
                    }
                }
            } />
            <p>{formState.errors.email?.message}</p>

            {/* TODO: validat pps */}
            <InputField labelName={"PPS Number:"} name={"pps"} placeholderExample={"Enter a PPS Number"} register={register} validators={
                {
                    required: "Please provide a pps number", maxLength: {
                        value: 15,
                        message: "pps number cannot exceed 15 characters"
                    }
                }
            } />
            <p>{formState.errors.pps?.message}</p>

            <PasswordField labelName={"Password:"} name={"password"} placeholderExample={"Enter a Password"} register={register} validators={
                {
                    required: "Please provide a password", maxLength: {
                        value: 20,
                        message: "password cannot exceed 20 characters"
                    }
                }
            } />
            <p>{formState.errors.password?.message}</p>

            <PasswordField labelName={"Confirm Password:"} name={"confirmPassword"} placeholderExample={"Enter a Password"} register={register} validators={
                {
                    required: "Please provide a confirmation password", maxLength: {
                        value: 20,
                        message: "password cannot exceed 20 characters"
                    }
                }
            } />
            <p>{formState.errors.confirmPassword?.message}</p>


            <input id="submit" type="submit" value={buttonVaule} className="custombtn col-12 " />
        </form>
    )

}