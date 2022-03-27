
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import CreateDoctorModal from '../../component/CreateDoctorModal';
import DashboardAvatar from "../../component/DashboardAvatar";
import SideNav from "../../component/SideNav";
import { User } from '../../model/user';
import { hospitalAdminService } from '../../Services/HospitalAdminService';
import "./style.scss";





export default function DashboardHome() {
    // useEffect, fetch all 

    const [doctorsList, setDoctorsList] = useState([]);

    function doctorItem(doctor) {
        return {
            staffID: doctor.staffID,
            firstName: doctor.firstName,
            lastName: doctor.lastName,
            email: doctor.email,
            specialization: doctor.specialization,
        }
    }

    useEffect(
        () => {
            async function fetchDoctors() {
                const tempdoctors = []
                const cResp = await hospitalAdminService.fetchDoctors(User.authToken())
                const fetchedDoctorslists = cResp.getSuccessData();
                for (const doctor of fetchedDoctorslists) {
                    tempdoctors.push(doctorItem(doctor))
                }
                setDoctorsList(tempdoctors)
            }
            fetchDoctors()
        }, []
    )


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
        const lastIdx = doctorsList.length - 1
        const lastDoctor = doctorsList[lastIdx]
        newDoctor.staffID = lastDoctor.staffID + 1
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