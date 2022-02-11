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

        new Promotion("Save patients data securly", " always happy to be here with you guys", "#E9E8F6"),
        new Promotion("Find Hospitals Near you", " always happy to be here with you guys", "#EEF1F6"),
        new Promotion("New Age Hospital", "happy to be here with you guys", "#FCF5ED"),]


    return <div className="box-container">
        {
            promotions.map((promotion, idx) => <PromotionCard key={idx} title={promotion.title} description={promotion.description} bannerColor={promotion.bannerColor} />)
        }

    </div>

}