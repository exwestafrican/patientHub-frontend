import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailField from "../EmailField";
import InputField from "../InputField";
import { useQuery } from "../../Hooks/useQuery";



export default function AdminRegForm() {
    const query = useQuery();
    const [errorMessage, setErrorMessage] = useState("");
    const [buttonVaule, setbuttonVaule] = useState("Register Admin");

    const eirCode = query.get("eirCode")
    const { register, handleSubmit, formState, reset, setFocus } = useForm();

    function onSubmit(data, e) {
        // submitDataToBackend(data)
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


            <input id="submit" type="submit" value={buttonVaule} className="custombtn col-12 " />
        </form>
    )

}