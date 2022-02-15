export default function checkbox({ labelName, name, register }) {
    return (
        <div className="form-check form-switch mb-3">
            <input {...register(name)} className="form-check-input" type="checkbox" role="switch" id={name} readOnly checked />
            <label className="form-check-label" htmlFor={name}>{labelName}</label>
        </div>
    )
}

