export default function checkbox({ labelName, name }) {
    return (
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={name} readOnly checked />
            <label className="form-check-label" htmlFor={name}>{labelName}</label>
        </div>
    )
}

