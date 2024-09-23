import React from "react";
import './Home.css'
import { useState, useEffect } from "react";

export default function Home() {
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        setIsLoad(true)
    }, [])


return (
    <div className={`home ${isLoad ? 'loaded':''}`}>
        <div className="space-sec">
            <p style={{ fontSize: '35px' }}> So, you want to travel to</p>
            <p className="paragraph"> Space</p>
            <p className="text">
                Let’s face it; if you want to go to space, you might as well genuinely go to
                outer space and not hover kind of on the edge of it. Well sit back, and relax
                because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div className="explore-sec"><p>Explore</p></div>
    </div>
)
}