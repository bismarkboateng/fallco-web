import "./AvailableClass.css"
import { ClassSection } from "./constants"




export default function index() {
    return (
        <section className="availableclass__wrapper">

            <div className="button-text__wrapper">
                <div className="class__ongoing" />
                <p className="class__ongoing-text">On going class</p>
            </div>
            <div className="button-text__wrapper">
                <div className="availableclass"/>
                <p className="available-text">Available class</p>
            </div>

            <section className="classess__wrapper">
                {ClassSection.map((each_class) => (
                    <div className={`${each_class.ongoing ? `ongoing__class` : 'available__class'} class`}>
                        <h1 className="venue">{ each_class.venue }</h1>
                        <h1 className="class">{ each_class.classSize }</h1>
                    </div>
                ))}
            </section>
        </section>
    )
}