import "./style.scss";
import PromotionCard from "../PromotionCard";

export default function PromotionCards() {

    class Promotion {

        constructor(title, description, bannerColor, path, linkFor) {
            this.title = title;
            this.description = description;
            this.bannerColor = bannerColor
            this.path = path
            this.linkFor = linkFor

        }

    }
    const promotions = [

        new Promotion("Focused on The Doctors", " scheduling an appoinment? setting prescription reminders? viewing a patients history. Everything essential to making a doctors life pleasant", "#E9E8F6", "doctor-registration", "Login As Doctor"),
        new Promotion("Be the future", "connect your various departments seemlesly with each other. We know managing a hospital can be a hassle", "#EEF1F6", "admin-login", "Login As Admin"),
        new Promotion("Sync Across Multiple Hospitals", "Transfer critical patient data accross multiple hospitals with the click of a button, patient managment has never been so simple", "#FCF5ED", "hospitalreg", "Contact Us"),]


    return <div className="box-container">
        {
            promotions.map((promotion, idx) => <PromotionCard key={idx} title={promotion.title} description={promotion.description} bannerColor={promotion.bannerColor} path={promotion.path} linkFor={promotion.linkFor} />)
        }

    </div>

}