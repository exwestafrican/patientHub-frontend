// import "./styles.scss";
import "./style.scss";
import InputField from "../InputField";
import Checkbox from "../Checkbox";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { createHospital, getErrorMessage } from "../../Services/HospitalService";
import SideImage from "../SideImage";
import Alert from "../Alert";

import PageLoader from "../PageLoader";
import cleanData from "../../utils/general";

export default function HospitalRegForm() {

    const { register, handleSubmit, formState, reset, setFocus } = useForm();
    const navigate = useNavigate();


    const [loading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    function onSubmit(data, e) {
        data.eirCode = cleanData(data.eirCode)
        submitDataToBackend(data)
    }


    async function submitDataToBackend(data) {
        setIsLoading(true)

        try {
            const cResp = await createHospital(data);
            console.log(data)
            const url = "/registrtion?eirCode=" + data.eirCode



            if (cResp.ok()) {
                reset();


                navigate(url);
            } else {
                const msg = cResp.getErrorMessage()
                //  wait a couple secs, then handle failure
                setTimeout(() => { handleFailure(msg) }, 3000)

            }

        } catch (error) {
            setErrorMessage("Service Unavailable");
            console.log("--->" + error)

        }
    }

    function handleFailure(msg) {
        setIsLoading(false)
        setErrorMessage(msg)
        setFocus("eirCode");
    }
    function RegForm() {

        return (
            <form onSubmit={handleSubmit(onSubmit)} className="form-control-lg col-lg-6">
                {errorMessage && <Alert message={errorMessage} />}
                <InputField labelName={"Name of Hospital:"} name={"hospitalName"} placeholderExample={"Enter name of Hospital"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Hospital Name cannot exceed 25 characters"
                        }
                    }
                } />
                <p>{formState.errors.hospitalName?.message}</p>
                <InputField labelName={"Contact Number:"} name={"contactNum"} placeholderExample={"+353"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 15,
                            message: "Contact num cannot be greater than 15 characters"
                        }
                    }
                } />
                <p>{formState.errors.contactNum?.message}</p>


                <InputField labelName={"County:"} name={"county"} placeholderExample={"e.g Westmeath"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 15,
                            message: "please keep the lenght of country to 15 characters"
                        }
                    }
                } />
                <p>{formState.errors.county?.message}</p>

                <InputField labelName={"City:"} name={"city"} placeholderExample={"e.g. Limerick"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 15,
                            message: "city cannot be longer than 15 characters"
                        }
                    }
                } />
                <p>{formState.errors.city?.message}</p>

                <InputField labelName={"Address Line:"} name={"addressLine"} placeholderExample={"15 Main St."} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Address lenght cannot exceed 25 characters"
                        }
                    }
                } />
                <p>{formState.errors.addressLine?.message}</p>


                <InputField labelName={"Eircode:"} name={"eirCode"} placeholderExample={"HXX XXXX"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 10,
                            message: "Eircode can't be longer than 10 characters"
                        }
                    }
                } />
                <p>{formState.errors.eirCode?.message}</p>

                <Checkbox labelName={"Switched on for HQ"} name={"hq"} register={register} />

                <InputField labelName={"Email:"} name={"contactEmail"} placeholderExample={"johnsmith@email.com"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 30,
                            message: "Email provided cannot exceed 30 characters"
                        }
                    }
                } />
                <p>{formState.errors.email?.message}</p>




                <input id="submit" type="submit" value={"Register Hospital"} className="custombtn" />
            </form>
        )

    }

    console.log(loading)
    return (
        <>
            {loading ? <PageLoader /> : <SideImage>< RegForm ></RegForm ></SideImage>}
        </>

        // <PageLoader />

    );



}