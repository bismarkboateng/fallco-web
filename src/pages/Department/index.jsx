import "./Department.css"
import { Faculty, Dean } from "../../assets"
import Div from "../../components/Div"

export default function index() {
    return (
        <section className="department__wrapper">

            <div className="department-image-content__wrapper">
                <div className="department__hidden-background"/>
                <img src={ Faculty } alt="faculty image" className="department__image" />
                <p className="department__name">
                    <span className="this_is">THIS IS</span> FECE
                </p>
            </div>

            <div className="department__about-section">
                <h2 className="department__about-content">ABOUT FACULTY OF COMPUTER AND ELECTRICAL ENGINEERING</h2>
                <Div />
                <p className="department__text">
                We're Keele and we're different. Founded almost 75 years ago to meet the demands of a new kind of society,<br />
                economy and world, our principles resonate now more than ever. <br />
                We are a campus university with over 12,500 students, nestled  <br />
                in 600 acres of Staffordshire countryside and just an hour from Manchester and Birmingham. <br />
                It's a big campus but a small and cosmopolitan community, with space to think and plenty to do.<br />   
                </p>
            </div>


            <div className="department__dean">
                <div className="department__dean-wrapper">
                    <img src={Dean} alt="dean image" className="deparment__dean-image" />
                    <small>
                        Prof. Abdul-Rahman Ahmed
                        Dean, Faculty of Electrical and
                        Computer Engineering
                    </small>
                </div>
                <p className="department__text">
                    It is my pleasure as Dean of the Faculty of Electrical and Computer Engineering to welcome you to our young and vibrant faculty.
                    The Faculty of Electrical and Computer Engineering is host to over 3,000 undergraduate and postgraduate
                    students who are some of the most talented and smartest students Ghana has on offer; and with young and energetic faculty members, 
                    the faculty is very much a future-looking one, eager to make significant impact and contribution to our country and beyond through 
                    excellence in teaching, research and innovation. 
                    With programs in Electrical and Electronic Engineering, Computer Engineering, Biomedical Engineering and Telecommunication Engineering, 
                    the Faculty of Electrical and Computer Engineering sits squarely within rapidly changing and transformative world of technology and especially 
                    of the 4th industrial revolution; which presents unique opportunities for the faculty to perform a leading role towards achieving sustainable 
                    developments in developing African countries such as Ghana.  Innovation in Digital technologies present interesting opportunities to leapfrog 
                    development challenges of many African countries and the Faculty of Electrical and Computer Engineering views positively its strategic position 
                    of training the skilled manpower, developing innovative digital technologies and solutions through research in the pursuit of successful integration 
                    and adoption of innovative technologies in helping Ghana develop.
                </p>
            </div>

        </section>
    )
}