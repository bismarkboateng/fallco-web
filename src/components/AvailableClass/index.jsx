import "./AvailableClass.css"
import { useState, useEffect } from "react";
// import { petroleumBuilding, NewBlock } from "./constants";



export default function index() {
    const[lectureRooms, setLectureRoom] = useState([]);

    const NewBlock = []
    const petroleumBuilding = []

    useEffect(() => {
        // fetching data from the backend api
        const base_url = "http://127.0.0.1:8000/api/v0.0.1/lecture-rooms/"

        async function fetchLectureRooms() {
            const response = await fetch(base_url);
            const lecture_rooms = await response.json();
            setLectureRoom(prevRooms => [...prevRooms, lecture_rooms])
        }

        fetchLectureRooms();

    }, [])

    lectureRooms.map((rooms) => {
        rooms.map((single) => {
            if (single.building_name === "Petroleum Building") {
                petroleumBuilding.push(single)
            }
            else {
                NewBlock.push(single);

            }
        })
    })

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
                                <h4>{ build.class_room }</h4>
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
                                <h4>{ build.class_room }</h4>
                                <h5>{build.class_size}</h5>
                            </div>
                        )) }
                    </div>
                </div>
            </section>
        </section>
    )
}