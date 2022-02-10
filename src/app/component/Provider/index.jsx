import "./provider.scss";


export default function Provider({ title, description }) {
    return (
        <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#" className="btn"> learn more <span className="fas fa-chevron-right"></span> </a>
        </div>
    )






}