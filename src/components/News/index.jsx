import { News } from "./constants";
import "./News.css"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function index() {

    useEffect(() => {
        AOS.init(); // initialize AOS on component mount
      }, []);

    return (
        <>
            <h1>News</h1>
            <section className="department__news-section" data-aos="fade-left" data-aos-duration="3000">
                    {
                        News.map((news) => (
                            <div className="department__news__wrapper">
                                <img src={news.image} alt="news image" className="department__news-image" />
                                <p className="department__news-title">{ news.title }</p>
                                <small className="department__news-date">{ news.Date } </small>
                            </div>
                        )) 
                    }
            </section>
        
        </>
    )
}