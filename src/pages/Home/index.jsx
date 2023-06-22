import { Action, Announcement, Footer, HeroSection, Navbar } from "../../components"


export default function index() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Announcement />
            <Action />
            <Footer />
        </div>
    )
}