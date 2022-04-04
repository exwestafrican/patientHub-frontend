import "./home.scss";
import PromotionCards from "../../component/PromotionCards";
import Hero from "../../component/Hero";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <div className="container">
                <section className="section">
                    <Hero />
                </section>
                <section className="section" >
                    <PromotionCards />
                </section>
                <Footer />
            </div>
        </>

    )
}