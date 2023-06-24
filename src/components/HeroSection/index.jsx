import "./HeroSection.css";
import { HeroSection } from "./constants";
import Tour from "../../assets/images/tour.jpg";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import { useRef } from "react";



export default function index() {
    const scrollRef = useRef(null);

    function scroll() {
        // making the scroll 
    }

    return (
        <section className="HeroSection">
            <img src={Tour} alt="background image" className="background" />
            { HeroSection.map((item) => (
                <div className="HeroSection--wrapper" key={item.index} ref={scrollRef}>
                    <div className="HeroSection--content_wrapper">
                        <h1 className="HeroSection_wrapper-title">{ item.title }</h1>
                        <p className="HeroSection_content">
                        {item.studentName} has proven to be an outstanding student after <br />
                        his 4 years term in this institution, we are hereby <br />
                        proud to award him the best graduating student in <br />
                        {item.title}
                        </p>
                        <button className="Graduation__video">
                            Graduation Video
                        </button>
                    </div>

                    <img src={item.studentImg} alt="best graduating student image"
                        className="best__student"
                    />
                    <AiFillCaretRight onClick={() => scroll("right")} className="right-arrow" />
                    <AiOutlineCaretLeft onClick={() => scroll("left")} className="left-arrow" />
                </div>
            ))}
        </section>
    )
}