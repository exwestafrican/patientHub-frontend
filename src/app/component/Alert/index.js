

export default function Alert({ message }) {


    return (
        <div className="alert alert-danger d-flex align-items-center alert__width mr-auto ml-auto" role="alert">
            <ion-icon size="large" name="alert-outline"></ion-icon>
            <div>
                {message}
            </div>
        </div>
    )
}

