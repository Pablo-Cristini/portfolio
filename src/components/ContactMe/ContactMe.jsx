import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-content">
      <div style={{ flex: 1 }}>
        <ContactInfoCard 
          iconUrl={require('../assets/correo.png')} 
          text="pablocristini.dev@gmail.com"
          link="mailto:pablocristini.dev@gmail.com"
          newTab={false}
        />
        <ContactInfoCard 
          iconUrl={require('../assets/github.png')} 
          text="https://github.com/Pablo-Cristini"
          link="https://github.com/Pablo-Cristini"
          newTab={true}
        />
        <ContactInfoCard 
          iconUrl={require('../assets/linkedin.png')} 
          text="https://www.linkedin.com/in/pablo-cristini-11651b287/"
          link="https://www.linkedin.com/in/pablo-cristini-11651b287/"
          newTab={true}
        />
      </div>

      <div style={{ flex: 1 }}>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;