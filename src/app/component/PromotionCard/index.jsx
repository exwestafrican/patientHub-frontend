import "./provider.scss";


export default function PromotionCard({ title, description, bannerColor }) {
    return (
        <div className="box" style={{ backgroundColor: bannerColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="#" >
                <button className="btn">
                    learn more
                </button>
            </a>
        </div>
    )






}