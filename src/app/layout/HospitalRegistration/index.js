
import Footer from "../../component/Footer";
import HospitalRegForm from "../../component/HospitalRegForm";
import NavBar from "../../component/NavBar";



export default function HospitalRegistration() {
    return (
        <>
            <NavBar />
            <div className="container">
                <HospitalRegForm />
            </div>
            <Footer />
        </>
    )
}