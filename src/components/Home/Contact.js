import React, { useRef } from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Gather form data
    const name = e.target.elements.user_name.value;
    const email = e.target.elements.user_email.value;
    const subject = e.target.elements.subject.value;
    const message = e.target.elements.message.value;

    // Create email content
    const emailContent = `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `;
    const formData = new FormData(form.current);
    formData.set('subject', subject);
    // Send the email using emailjs library
    emailjs
      .sendForm(
        'service_h4c21h8', 
        'template_pzgoago', 
        form.current,
        'ideoCSUE6XG0jHeCJ' 
      )
      .then((response) => {
          alert('Email sent successfully');
          form.current.reset();
      })
      .catch((error) => {
        alert('Failed to send email');
        console.error('Email sending failed:', error);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>
                          If you have any questions, collaboration opportunities, or just want to say hello,
                          feel free to reach out to me using the contact information below.
                          I would love to hear from you and connect!
            </p>
            <div className="icons">
              <div className="row">
                <FaUser />
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Khaoula ELFATIMI</div>
                </div>
              </div>
              <div className="row">
                <FaMapMarkerAlt />
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Rabat, Morocco</div>
                </div>
              </div>
              <div className="row">
                <FaEnvelope />
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">khaoulaelfatimi4@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="fields">
                <div className="field name">
                  <input type="text" name="user_name" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" name="user_email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  name="message"
                  placeholder="Message.."
                  required
                ></textarea>
              </div>
              <div className="button-area">
                <button type="submit" value="Send">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
