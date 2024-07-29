import React from "react";
import './ContactMe.css';
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
    return (
       
        <section className="contact-content">
            <div style={{flex: 1}}>
                <ContactInfoCard 
                iconUrl= {require('../assets/correo.png')} alt="email logo"
                text="pablocristini.dev@gmail.com"
                />
                <ContactInfoCard 
                iconUrl= {require('../assets/github.png')} alt="GitHub logo"
                text="https://github.com/Pablo-Cristini"
                />
                <ContactInfoCard 
                iconUrl= {require('../assets/linkedin.png')} alt="Linkedin logo"
                text="https://www.linkedin.com/in/pablo-cristini-11651b287/"
                />
            </div>

            <div style={{flex: 1}}>
                <ContactForm />
            </div>

        </section>
    )
}
    export default ContactMe;