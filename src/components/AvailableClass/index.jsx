import "./AvailableClass.css"
import { petroleumBuilding, NewBlock } from "./constants";



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
                <div className="petroleum__building">
                    <h1 className="petroleum__title">Petroleum Building</h1>
                    <div className="petroleum">
                    { petroleumBuilding.map((build) => (
                            <div key={build.id} className={`${build.is_available ? `ongoing__class` : `available__class`}`}>
                                <h4>{ build.class_name }</h4>
                                <h5>{build.class_size}</h5>
                            </div>
                        )) }
                    </div>
                </div>

                <div className="newblock__building">
                    <h1 className="newblock__title">New Block</h1>
                    <div className="newblock">
                        { NewBlock.map((build) => (
                            <div key={build.id} className={`${build.is_available ? `ongoing__class` : `available__class`}`}>
                                <h4>{ build.class_name }</h4>
                                <h5>{build.class_size}</h5>
                            </div>
                        )) }
                    </div>
                </div>
            </section>
        </section>
    )
}