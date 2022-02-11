export default function InputField({name, labelName, placeholderExample}) {
return(<div className="mb-3">
<label htmlFor={name} className="form-label">{labelName}</label>
<input type="text" className="form-control" id={name} placeholder={placeholderExample}/>
</div>)
}