
import DashboardAvatar from "../../component/DashboardAvatar";
import SideNav from "../../component/SideNav";
import "./style.scss";


function NavBarHeader() {
    return (
        <div className="navigation">
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

            <div className="profile">
                <i className="far fa-bell"></i>
                <DashboardAvatar />
            </div>
        </div>
    )
}


export default function DashboardHome() {
    return (
        <div className="dashboard">
            <SideNav />
            <section className="interface">
                <NavBarHeader />
                <h3 class="i-name">
                    Dashboard
                </h3>
            </section >


        </div >
    )
}