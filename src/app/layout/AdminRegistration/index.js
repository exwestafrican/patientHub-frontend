import AdminRegForm from "../../component/AdminRegForm";
import Avatar from "../../component/Avatar";
import Footer from "../../component/Footer";
import NavBar from "../../component/NavBar";
import { useQuery } from "../../Hooks/useQuery";
import "./styles.scss"

export default function AdminRegistration() {

    return (
        <>
            <NavBar />
            <div className="container">
                <section className="full-page center stack-items item-y-gap ">
                    <Avatar />
                    <AdminRegForm />
                </section>
            </div>
            <Footer />
        </>
    )
}