import { Action, Announcement, HeroSection } from "../../components"
import "./Home.css"

export default function index() {
    return (
        <div>
            <HeroSection />
            <div className="announcement--action_block">
                <Announcement />
                <Action />
            </div>
        </div>
    )
}