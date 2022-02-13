import "./home.scss";
import PromotionCards from "../../component/PromotionCards";
import Hero from "../../component/Hero";

export default function Home() {
    return (
        <div className="container">
            <section className="section">
                <Hero />
            </section>
            <section className="section">
                <PromotionCards />
            </section>
        </div>

    )
}