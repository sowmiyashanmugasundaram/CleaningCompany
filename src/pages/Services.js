import React from "react";
import "./Services.css"; // Custom CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBuilding, faBoxes, faBroom, faTree, faCalendarCheck, faFan, faSprayCan } from "@fortawesome/free-solid-svg-icons";


const services = [
  { title: "Home Cleaning", icon: faHome, description: "Regular cleaning (dusting, vacuuming, mopping), Deep cleaning (behind furniture, baseboards), Post-renovation cleaning." },
  { title: "Office Cleaning", icon: faBuilding, description: "Regular office cleaning (desks, floors, restrooms), Carpet and upholstery cleaning, Window cleaning." },
  { title: "Move-in/Move-out Cleaning", icon: faBoxes, description: "Thorough cleaning for new or old homes, Sanitizing kitchens, bathrooms, and appliances." },
  { title: "Specialized Cleaning", icon: faBroom, description: "Carpet and rug cleaning, Upholstery and sofa cleaning, Mattress cleaning, Pressure washing for exteriors." },
  { title: "Green Cleaning", icon: faTree, description: "Eco-friendly products and techniques for sustainable cleaning." },
  { title: "Event Cleanup", icon: faCalendarCheck, description: "Pre-event and post-event cleaning." },
  { title: "Air Duct Cleaning", icon: faFan, description: "Clean air ducts to improve air quality and system efficiency." },
  { title: "Disinfection Services", icon: faSprayCan, description: "Professional disinfection for homes and offices to eliminate germs and viruses." },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
