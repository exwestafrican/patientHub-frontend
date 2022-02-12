import "./provider.scss";


export default function PromotionCard({ title, description, bannerColor }) {
    return (
        <div className="promobox" style={{ backgroundColor: bannerColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <a href="#" >
                <button className="promobtn">
                    learn more
                </button>
            </a>
        </div>
    )






}