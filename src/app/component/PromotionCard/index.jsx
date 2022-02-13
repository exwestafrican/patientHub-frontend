import { Link } from "react-router-dom";
import "./provider.scss";


export default function PromotionCard({ title, description, bannerColor, path }) {
    return (
        <div className="promobox" style={{ backgroundColor: bannerColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/${path}`}>
                <button className="promobtn">
                    learn more
                </button>
            </Link>
        </div >
    )






}