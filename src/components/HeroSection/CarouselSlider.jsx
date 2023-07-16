import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { HeroSection } from "./constants";



export default function CarouselSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (
        <Slider { ...settings}>
            { HeroSection.map((item) => (
                <div className="HeroSection--wrapper" key={item.index}>
                    <div className="HeroSection--content_wrapper">
                        <h1 className="HeroSection_wrapper-title">{ item.title }</h1>
                        <p className="HeroSection_content">
                        {item.studentName} has proven to be an outstanding student after <br />
                        his 4 years term in this institution, we are hereby <br />
                        proud to award him the best graduating student in <br />
                        {item.title}
                        </p>
                        <button className="Graduation__video">
                            Grad. Video
                        </button>
                    </div>

                    <img src={item.studentImg} alt="best graduating student image"
                        className="best__student"
                    />
                    <AiOutlineRight onClick={() => scroll("right")} className="right-arrow" />
                    <AiOutlineLeft onClick={() => scroll("left")} className="left-arrow" />
                </div>
            ))}
        </Slider>
    )
}