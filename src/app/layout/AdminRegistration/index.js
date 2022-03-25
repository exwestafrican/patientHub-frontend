import AdminRegForm from "../../component/AdminRegForm";
import Avatar from "../../component/Avatar";
import { useQuery } from "../../Hooks/useQuery";
import "./styles.scss"

export default function AdminRegistration() {

    return (
        <section className="full-page center stack-items item-y-gap ">
            <Avatar />
            <AdminRegForm />
        </section>
    )
}