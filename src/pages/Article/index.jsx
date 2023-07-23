import "./Article.css"
import Div from "../../components/Div";
import { Articles } from "./constants";
import { Link } from "react-router-dom";


export default function index() {

    return (
        <section className="article--content">
            <h1 className="article--header">
                ALUMNI ARTICLES
                <p style={{ marginTop: "10px"}}>
                </p>
                <Div />
            </h1>

            <section className="articles">
                { Articles.map((article) => (
                    <div key={article.index} className="article"
                        style={index !== index.length - 1 ? { marginBottom: "80px" } : { marginBottom: "0px" }}
                    >
                        <img src={article.image} alt="article image" className="article--image" />
                        <div className="article--info">
                            <h5 className="article--date">{ article.Date }</h5>
                            <Link to="/article-detail" style={{ textDecoration: "none"}}>
                                <div className="article--title">{ article.Title }</div>
                            </Link>
                            <Div />
                            <p className="arti--content">{ article.content } </p>
                            <p className="read--article">
                                Read Article
                            </p>
                        </div>
                    </div>
                )) }
            </section>
            
        </section>
    )
}