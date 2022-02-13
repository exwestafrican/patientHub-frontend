


export default function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">

                <span className="text-muted">&copy; Made With  <span> <ion-icon name="heart"></ion-icon> </span> from Patient Hub</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li className="ms-3"><a className="text-muted" href="#"> <ion-icon name="logo-facebook"></ion-icon></a></li>
                <li className="ms-3"><a className="text-muted" href="#"> <ion-icon name="logo-instagram"></ion-icon></a></li>
            </ul>
        </footer>
    )
}