// import "./styles.scss";
import "./style.scss";
import InputField from "../InputField";
import Checkbox from "../Checkbox";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import postData from "../../Network/post."

export default function HospitalRegForm() {

    const { register, handleSubmit, formState, reset } = useForm();

    function onSubmit(data, e) {
        // do nothing
        //   postData("",data)
        console.log(data);
    }


    function cleanForm() {
        // can do other stuff before clean up
        if (formState.isSubmitSuccessful) {
            reset()
        }

    }


    // if form submittion is successful, cleanUp
    useEffect(cleanForm, [formState, reset])


    return (
        <div className="flex-box ">
            <div className="item">

            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control-lg col-lg-6">
                <InputField labelName={"Name of Hospital:"} name={"hname"} placeholderExample={"Enter name of Hospital"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Hospital Name cannot exceed 25 characters"
                        }
                    }
                } />
                <p>{formState.errors.hname?.message}</p>
                <InputField labelName={"Contact Number:"} name={"contactnum"} placeholderExample={"+353"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 15,
                            message: "Contact num cannot be greater than 15 characters"
                        }
                    }
                } />
                <p>{formState.errors.contactnum?.message}</p>


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

                <InputField labelName={"Address Line:"} name={"addressline"} placeholderExample={"15 Main St."} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 25,
                            message: "Address lenght cannot exceed 25 characters"
                        }
                    }
                } />
                <p>{formState.errors.addressline?.message}</p>


                <InputField labelName={"Eircode:"} name={"eircode"} placeholderExample={"HXX XXXX"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 10,
                            message: "Eircode can't be longer than 10 characters"
                        }
                    }
                } />
                <p>{formState.errors.eircode?.message}</p>

                <Checkbox labelName={"Switched on for HQ"} name={"hq"} register={register} />

                <InputField labelName={"Email:"} name={"email"} placeholderExample={"johnsmith@email.com"} register={register} validators={
                    {
                        required: "This field is required", maxLength: {
                            value: 30,
                            message: "Email provided cannot exceed 30 characters"
                        }
                    }
                } />
                <p>{formState.errors.email?.message}</p>




                <input id="submit" type="submit" value="Register Hospital" className="custombtn" />
            </form>
        </div>
    );


    // return (
    // <form onSubmit={handleSubmit(onSubmit)} id="register" className="mt-5 mb-5 form-control-lg" >
    //     <InputField labelName={"Name of Hospital:"} name={"hname"} placeholderExample={"Enter name of Hospital"} register={register} />
    //     <p>{errors.hname?.message}</p>









    //     <Checkbox labelName={"IS HQ"} name={"hq"} />




    {/* 
          
         
          
          
            <InputField labelName={"Is this hospital, Hedquarters?:"} name={"hq"} placeholderExample={"Yes/No"} />
            <Checkbox labelName={"Switched on for HQ"} name={"hq"} />
            <InputField labelName={"Email:"} name={"email"} placeholderExample={"johnsmith@email.com"} />
            <InputField labelName={"Password:"} name={"password"} placeholderExample={"****"} />
            <InputField labelName={"Confirm Password:"} name={"confirm password"} placeholderExample={"****"} /> */}

    {/* <input id="submit" type="submit" value="Sign up" /> */ }
    // <input id="submit" className="btn" type="submit" value="Sign up" />

    {/* <p class="change_link"> Already a member ?</p>
            <a href="" class="to_login"> Go and log in </a> */}

    // </form>
    // );
}