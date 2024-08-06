// import React from "react";
// import './ContactInfoCard.css';

// const ContactInfoCard = ({iconUrl, text}) => {
//     return (
//         <div className="contact-details-card">
//             <div className="icon">
//                 <img src={iconUrl} alt={text} />
//             </div>
//         <p>{text}</p>
//         </div>
//     )
// }
//     export default ContactInfoCard;
import React from "react";
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link, newTab }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>
        <a href={link} target={newTab ? "_blank" : "_self"} rel="noopener noreferrer">
          {text}
        </a>
      </p>
    </div>
  );
};

export default ContactInfoCard;