// import "./styles.scss";
import "./style.scss";
import InputField from "../InputField";
import Checkbox from "../Checkbox";

export default function HospitalRegForm() {
    console.log("name");
    return (
        <form id="register" method="post" className="hospitalForm">
            <InputField labelName={"Name of Hospital:"} name={"hname"} placeholderExample={"Enter name of Hospital"} />
            <InputField labelName={"Contact Number:"} name={"contactnum"} placeholderExample={"+353"} />
            <InputField labelName={"Country:"} name={"country"} placeholderExample={"e.g Ireland"} />
            <InputField labelName={"County:"} name={"county"} placeholderExample={"e.g Westmeath"} />
            <InputField labelName={"City:"} name={"city"} placeholderExample={"e.g. Limerick"} />
            <InputField labelName={"Address Line:"} name={"addressline"} placeholderExample={"15 Main St."} />
            <InputField labelName={"Eircode:"} name={"eircode"} placeholderExample={"HXX XXXX"} />
            <InputField labelName={"Is this hospital, Hedquarters?:"} name={"hq"} placeholderExample={"Yes/No"} />
            <Checkbox labelName={"Switched on for HQ"} name={"hq"} />
            <InputField labelName={"Email:"} name={"email"} placeholderExample={"johnsmith@email.com"} />
            <InputField labelName={"Password:"} name={"password"} placeholderExample={"****"} />
            <InputField labelName={"Confirm Password:"} name={"confirm password"} placeholderExample={"****"} />

            <input id="submit" type="submit" value="Sign up" />
            <p class="change_link"> Already a member ?</p>
            <a href="" class="to_login"> Go and log in </a>

        </form>
    );
}