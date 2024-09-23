import React from "react";
import data from '../data.json'
import { useState, useEffect } from "react";
import '../Component/Technology.css'

export default function Technology() {
    const [technology, setTechnology] = useState([]);
    const [selectIndex, setSelectIndex] = useState(0);

    useEffect(() => {
        if (data && data.technology && data.technology.length > 0) {
            setTechnology(data.technology)
        }
    }, [])

    const handelSelect = (index) => {
        setSelectIndex(index)
    }
    return (
        <>
            <div className="tech-continar">
                <h1><span>03</span> SPACE LAUNCH 101</h1>
                <div className="technonlogy-info">
                    <div className="numbers-move">
                        {technology.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handelSelect(index)}
                                className={`number ${selectIndex === index ? "active ": " "}`}
                            >{index + 1}</button>
                        ))
                        }
                    </div>
                    <div>
                        {technology.length > 0 && (
                            <div className="technology-details">
                                <div className="tech-det">
                                    <p>THE TECHNOLOGY...</p>
                                    <h2>{technology[selectIndex].name}</h2>
                                    <p className="description">{technology[selectIndex].description}</p>
                                </div>
                                <div className="tech-img">
                                    <img src={technology[selectIndex].images.portrait} alt={technology[selectIndex].name}></img>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )

}