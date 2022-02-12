import "./style.scss";
import PromotionCard from "../PromotionCard";

export default function PromotionCards() {

    class Promotion {

        constructor(title, description, bannerColor) {
            this.title = title;
            this.description = description;
            this.bannerColor = bannerColor

        }

    }
    const promotions = [

        new Promotion("Save patients data securly", " always happy to be here with you guys  with each project and track their metrics separetly their metrics separetly", "#E9E8F6"),
        new Promotion("Find Hospitals Near you", " connect your various webhooks products with each project and track their metrics separetly", "#EEF1F6"),
        new Promotion("New Age Hospital", "happy to be here with you guys Hospitals Near you connect your various webhooks products with each project", "#FCF5ED"),]


    return <div className="box-container">
        {
            promotions.map((promotion, idx) => <PromotionCard key={idx} title={promotion.title} description={promotion.description} bannerColor={promotion.bannerColor} />)
        }

    </div>

}