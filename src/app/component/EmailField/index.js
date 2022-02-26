export default function EmailField({ name, labelName, placeholderExample, register, validators }) {



    return (
        // <div className="mb-3">
        //     <label htmlFor={name} className="form-label">{labelName}</label>
        //     <input {...register(name, { required: "This field is required" })} type="text" className="form-control" id={name} placeholder={placeholderExample} />
        //     <div id="validationServer03Feedback" class="invalid-feedback">
        //         {errors.meesage}
        //     </div>
        // </div>
        <div className="mb-4">
            <label htmlFor={name} className="form-label">{labelName}</label>
            <input type="email" {...register(name, validators)} className="form-control" id={name} aria-describedby={name} placeholder={placeholderExample} />
        </div>
    )
}