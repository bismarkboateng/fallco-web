import "./Department.css"
import { Faculty, Dean } from "../../assets"
import Div from "../../components/Div"
import { News } from "../../components"
import { useEffect } from "react"

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function index() {


    useEffect(() => {
        AOS.init(); // initialize AOS on component mount
      }, []);


    return (
        <section className="department__wrapper">

            <div className="department-image-content__wrapper">
                <div className="department__hidden-background"/>
                <img src={ Faculty } alt="faculty image" className="department__image" />
                <p className="department__name">
                    <span className="this_is">THIS IS</span> FECE
                </p>
            </div>

            <div className="department__about-section" data-aos="flip-left" data-aos-duration="3000">
                <h2 className="department__about-content">ABOUT FACULTY OF COMPUTER AND ELECTRICAL ENGINEERING</h2>
                <Div />
                <p className="department__text">
                    The KNUST College of Engineering (COE) was founded in October 1952 and has over half a century, <br />
                    maintained a reputation of quality training and being the forefront of preparing manpower to <br />
                    support the technological and engineering advancement of Ghana and Africa.<br />
                    Many well-known Ghanaian academics and professionals, both in and outside Ghana, <br />
                    have passed through the lecture halls/rooms of this prestigious African institution.  <br />
                    The College has a vision to uplift the quality of Engineering Education and promote... <br />
                    {/* Technology Advancement in Ghana and Africa.  Currently COE comprises nine (9) departments <br />
                    running 15 academic programmes at the undergraduate and post graduate levels.  <br/>
                    These programmes are Civil Engineering, Geomatic Engineering, Electrical Engineering,<br />
                    Telecommunications Engineering, Computer Engineering, Mechanical Engineering, <br />
                    Aerospace Engineering, Agricultural Engineering, Petroleum Engineering<br /> */}
                </p>
            </div>


            <div className="department__dean" data-aos="fade-right" data-aos-duration="3000">
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

            <News />
        </section>
    )
}