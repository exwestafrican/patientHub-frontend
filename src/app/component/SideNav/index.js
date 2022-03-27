
import "./style.scss";

function SideNavOptions({ navItems }) {

    function SideNavListItem({ name, redirectTo }) {
        return (
            <li>
                <i className="fad fa-chart-pie-alt"></i>
                <a href={redirectTo}>{name}</a>
            </li>
        )
    }

    return (
        < div className="items" >

            {
                navItems.map(
                    (item, idx) => <SideNavListItem
                        key={idx}
                        name={item.name}
                        redirectTo={item.redirectTo} />
                )
            }
        </div >
    )


}

export default function SideNav() {
    return (
        <section id="menu">
            <div className="logo">
                <img src="" alt="" />
                <h2>Patient Hub</h2>
            </div>
            <SideNavOptions navItems={[
                {
                    name: "Home",
                    redirectTo: "/home",
                },
                {
                    name: "Summary",
                    redirectTo: "/summary"
                },
                {
                    name: "List",
                    redirectTo: "/list"
                }
            ]} />
        </section>
    )
}