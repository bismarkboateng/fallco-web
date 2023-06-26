import { Action, Announcement, Footer, HeroSection, Navbar } from "../../components"
import "./Home.css"

export default function index() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <div className="announcement--action_block">
                <Announcement />
                <Action />
            </div>

            <Footer />
        </div>
    )
}