import React, { useState, useEffect } from "react";
import data from "../../data.json";
import './Destanation.css';

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState(null);


  useEffect(() => {
    if (data && data.destinations && data.destinations.length > 0) {
      setDestinations(data.destinations);
      setSelectedDestination(data.destinations[0]);
    }
  }, []);

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
  };

  return (
    <div className="dist">
      <h2>PICK YOUR DESTINATION</h2>
      <div className="destinations-list">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card"
            style={{
              opacity: selectedDestination && selectedDestination.name !== destination.name ? 0.5 : 1,
              transition: 'opacity 0.3s ease'
            }}>
            <div className="img-of-plant">
              <img
                src={destination.images.png}
                alt={destination.name}
                onClick={() => handleDestinationClick(destination)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="name-of-plant">
              <h3 onClick={() => handleDestinationClick(destination)} style={{ cursor: 'pointer' }}>
                {destination.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
      {selectedDestination && (
        <div className={`destination-detail ${selectedDestination ? 'show' : ''}`}>
          <div><img src={selectedDestination.images.png} alt={selectedDestination.name}
          />
          </div>
          <div>
            <h2>{selectedDestination.name}</h2>
            <p className="description">{selectedDestination.description}</p>
            <p className="line"></p>
            <div className="extra-details">
              <p><strong>Distance :<br></br></strong> {selectedDestination.distance}</p>
              <p><strong>Travel Time :<br></br></strong> {selectedDestination.travel}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinations;
