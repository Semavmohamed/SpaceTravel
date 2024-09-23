
import React, { useEffect, useState } from "react";
import data from '../data.json';
import './Crew.css';

export default function Crew() {
    const [crew, setCrews] = useState([]);
    const [selectedCrewIndex, setSelectedCrewIndex] = useState(0); // تتبع العضو المحدد

    useEffect(() => {
        if (data && data.crew && data.crew.length > 0) {
            setCrews(data.crew);
        }
    }, []);

    const handleSelectCrew = (index) => {
        setSelectedCrewIndex(index);
    }

    return (
        <>
            <h1 className="main"><span>03</span> MEET YOUR CREW</h1>
            <div className="crew-container">

                <div className="crew-navigation">
                    {crew.map((_, index) => (
                        <button
                            style={{ cursor: "pointer" }}
                            key={index}
                            className={`dot ${selectedCrewIndex === index ? 'active' : ''}`}
                            onClick={() => handleSelectCrew(index)}
                        >
                        </button>
                    ))}
                </div>
                <div className="crew-info">
                    {crew.length > 0 && (
                        <div className="crew-details">
                            <div className="details">
                                <h2>{crew[selectedCrewIndex].role}</h2>
                                <h3>{crew[selectedCrewIndex].name}</h3>
                                <p>{crew[selectedCrewIndex].bio}</p>
                            </div>
                            <div>
                                <img src={crew[selectedCrewIndex].images.png} alt={crew[selectedCrewIndex].name} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
