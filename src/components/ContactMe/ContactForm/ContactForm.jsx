import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css'; 

const ContactForm = () => {
        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_dmhhksj', 'template_hgum68m', form.current, {
              publicKey: 'WAAYpH6DjL8cZXo3l',
            })
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };

        return (
          <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="user_name" className="name-container">Nombre</label>
              <input type="text" id="user_name" name="user_name" required />
              
              <label htmlFor="user_email">Email</label>
              <input type="email" id="user_email" name="user_email" required />
              
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="3" required />
              
              <input className="button" type="submit" value="Enviar" />
          </form>
      );
    }
        export default ContactForm;