
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import CreateDoctorModal from '../../component/CreateDoctorModal';
import DashboardAvatar from "../../component/DashboardAvatar";
import SideNav from "../../component/SideNav";
import "./style.scss";





export default function DashboardHome() {
    const data = [
        {
            staffID: 1,
            firstName: 'Beetlejuice',
            lastName: "Bloom",
            email: "bloom@gmail.com",
            specialization: 'Sugery',
        },
        {
            staffID: 2,
            firstName: 'Ghostbusters',
            lastName: "Bloom",
            email: "ghost@gmail.com",
            specialization: 'Pediatician',
        },
    ]
    const [doctorsList, setDoctorsList] = useState(data);

    const columns = [
        {
            id: "staffID",
            name: "Staff ID",
            selector: row => row.staffID,
            sortable: true

        },

        {
            id: "firstName",
            name: 'First Name',
            selector: row => row.firstName,
            sortable: true
        },

        {
            id: "lastName",
            name: 'Last Name',
            selector: row => row.lastName,
        },
        {
            id: "email",
            name: 'Email',
            selector: row => row.email,
        },

        {
            id: "specialization",
            name: 'Specialization',
            selector: row => row.specialization,
        },
    ];




    function NavBarHeader() {
        return (
            <div className="navigation">
                <input type="text" className="form-control" placeholder="staffID" aria-label="staffID" aria-describedby="basic-addon1" />

                <div className="profile">
                    <i className="far fa-bell"></i>
                    <DashboardAvatar />
                </div>
            </div>
        )
    }
    function updateDoctorsListHandler(newDoctor) {
        console.log("here");
        console.log(newDoctor);
        setDoctorsList([...doctorsList, newDoctor])
    }

    return (
        <div className="dashboard">
            <SideNav />
            <section className="interface">
                <NavBarHeader />

                <div className="i-name split postionInBoard">
                    <h3>Dashboard</h3>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">
                        Create Doctor
                    </button>

                </div>

                <CreateDoctorModal updateDoctorsList={(newDoc) => updateDoctorsListHandler(newDoc)} />

                <div className="board postionInBoard">
                    <DataTable
                        columns={columns}
                        data={doctorsList}
                        selectableRows
                        persistTableHead pagination />
                </div>
            </section >
        </div >
    )
}