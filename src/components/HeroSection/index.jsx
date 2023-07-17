import "./HeroSection.css";
import { useRef } from "react";
import { HeroSection } from "./constants";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";


export default function index() {
    const divRef = useRef(null);

    function scroll(direction) {
        const { current } = divRef;

        if(direction === "left"){
            current.scrollLeft -= 1905;
          }
          else{
            current.scrollLeft += 1905;
          }
    
        }

    return (
        <section className="HeroSection__wrapper" ref={divRef}>
            { HeroSection.map((item) => (
                <div key={item.index} className="image__wrapper">
                    <img src={item.image} className="HeroSection--image" />
                    <AiOutlineLeft onClick={() => scroll("left")} className="left-arrow"/>
                    <AiOutlineRight onClick={() => scroll("right")} className="right-arrow"/>
                </div>
            )) }
        </section>
    )

}