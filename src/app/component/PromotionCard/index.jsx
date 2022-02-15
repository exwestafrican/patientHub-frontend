import { Link } from "react-router-dom";
import "./provider.scss";


export default function PromotionCard({ title, description, bannerColor, path, linkFor }) {
    return (
        <div className="promobox" style={{ backgroundColor: bannerColor }}>
            <h2>{title}</h2>
            <p>{description}</p>
            <Link to={`/${path}`}>
                <button className="promobtn">
                    {linkFor}
                </button>
            </Link>
        </div >
    )






}