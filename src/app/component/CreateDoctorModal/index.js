import InputField from "../InputField";
import { useForm } from "react-hook-form";
import EmailField from "../EmailField";
import { useState } from "react";
import Alert from "../Alert";

export default function CreateDoctorModal({ updateDoctorsList }) {
    const { register, handleSubmit, formState, reset, setFocus } = useForm();
    const [buttonVaule, setbuttonVaule] = useState("Register Admin");
    const [errorMessage, setErrorMessage] = useState("");


    function onSubmit(data, e) {
        data["gender"] = "not specified";

        console.log(data);
        // clear data 
        // close modal

        updateDoctorsList(data)


    }

    async function submitDataToBackend(data) {
        setbuttonVaule("Submitting....")
        try {

        } catch (error) {
            setErrorMessage("Something went wrong")
            console.log(error)
        }

    }

    function ModalForm() {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                {errorMessage && <Alert message={errorMessage} />}
                <InputField labelName={"First Name:"} name={"firstName"} placeholderExample={"Enter a First Name"} register={register} validators={
                    {
                        required: "Please provide a first name", maxLength: {
                            value: 15,
                            message: "first name cannot exceed 15 characters"
                        }
                    }
                } />
                <p className="wrong_input" >{formState.errors.lastName?.message}</p>
                <InputField labelName={"Last Name:"} name={"lastName"} placeholderExample={"Enter a Last Name"} register={register} validators={
                    {
                        required: "Please provide a last name", maxLength: {
                            value: 15,
                            message: "last name cannot exceed 15 characters"
                        }
                    }
                } />
                <p className="wrong_input">{formState.errors.firstName?.message}</p>

                <InputField labelName={"Contact Number:"} name={"contactNum"} placeholderExample={"Enter a Contact Number"} register={register} validators={
                    {
                        required: "Please provide a contact number", maxLength: {
                            value: 15,
                            message: "contact number cannot exceed 15 characters"
                        }
                    }
                } />
                <p className="wrong_input" >{formState.errors.contactNum?.message}</p>

                <EmailField labelName={"Email:"} name={"email"} placeholderExample={"Enter an Email"} register={register} validators={
                    {
                        required: "Please provide an email", maxLength: {
                            value: 25,
                            message: "email cannot exceed 25 characters"
                        }
                    }
                } />
                <p className="wrong_input">{formState.errors.email?.message}</p>

                <InputField labelName={"PPS Number:"} name={"pps"} placeholderExample={"Enter a PPS Number"} register={register} validators={
                    {
                        required: "Please provide a pps number", maxLength: {
                            value: 15,
                            message: "pps number cannot exceed 15 characters"
                        }
                    }
                } />
                <p className="wrong_input">{formState.errors.pps?.message}</p>
                <InputField labelName={"Specialization:"} name={"specialization"} placeholderExample={"Enter Doctors Specialization"} register={register} validators={
                    {
                        required: "Please provide a specialization", maxLength: {
                            value: 35,
                            message: "specialization cannot exceed 35 characters"
                        }
                    }
                } />
                <p className="wrong_input">{formState.errors.specialization?.message}</p>

                <div className="modal-footer">
                    <input id="submit" type="submit" value={buttonVaule} className=" custombtn col-12" />
                </div>
            </form>
        )
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Create New Doctor</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ModalForm />
                    </div>
                </div>
            </div>
        </div>

    )
}