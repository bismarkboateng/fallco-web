import { News } from "./constants";
import "./News.css"



export default function index() {
    return (
        <>
            <h1>News</h1>
            <section className="department__news-section">
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