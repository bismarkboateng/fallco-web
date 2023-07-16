import "./HeroSection.css";
import Tour from "../../assets/images/tour.jpg";
import CarouselSlider from "./CarouselSlider";

// import { useRef } from "react";




export default function index() {
    // const scrollRef = useRef(null);

    // function scroll(direction) {

    //     console.log("clicked")
    //    const { current } = scrollRef;

    //    if (direction === "left") {
    //     current.scrollLeft -= 1750
    //    } else {
    //     current.scrollLeft += 1750
    //    }
    // }

    return (
        <section className="HeroSection">
            {/* <img src={Tour} alt="background image" className="background--heroSection" /> */}
            <CarouselSlider />

        </section>
    )
}