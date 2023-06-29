import Div from "../../components/Div"
import "./ArticleDetail.css"
import { ArticleDetail } from "./constants"

export default function index() {
    return (
        <section className="article--detail__content">
            
            <h1 className="article--header">
                <small style={{ fontWeight: "400", fontSize: "14px", marginBottom: "5px"}}>13 Feb 2013</small>
                ALUMNI ARTICLESNEW RESEARCH WILL HELP PATIENTS SUFFERING <br />DEBILITATING AFTER-EFFECTS OF TROPICAL VIRAL INFECTION
                <p style={{ marginTop: "10px"}}>
                    <Div />
                </p>
            </h1>

            <div className="article__wrapper">
                <section className="article-detail">
                    <img src={ArticleDetail[0].image} alt="article-image" className="article--detail__image" />
                    <p className="article--text">
                        {ArticleDetail[0].content}
                    </p>
                </section>

                
                <div className="mostread__wrapper">
                    <h4 style={{ color: "gray"}}>MOST READ</h4>
                    <p className="article--most__read">
                        New Report Reveals that it's imperative to marry at an early age
                    </p>
                    <p className="article--most__read">
                        New Report Reveals that it's imperative to marry at an early age
                    </p>
                    <p className="article--most__read">
                        New Report Reveals that it's imperative to marry at an early age
                    </p>
                </div>

            </div>

        </section>
    )
}