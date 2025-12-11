import React from 'react'
import "../styles/contact.css";
import msg_icon from '../assets/msg-icon.png'
import mail_icon from '../assets/mail-icon.png'
import phone_icon from '../assets/phone-icon.png'
import location_icon from '../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0a5e8fe2-139a-4645-b4eb-a07b01ab96c8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section id="contact" className="contact-wrapper">
    <h2 className="contact-heading">Contact Us</h2>

    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
            <p>
                We’d love to hear from you! Whether you have a question about our programs, campus, or admissions — our team is ready to help.
                Simply fill out the form below and we’ll get back to you as soon as possible.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> umair@gmail.com</li>
                <li><img src={phone_icon} alt="" /> +92 317-5048652</li>
                <li><img src={location_icon} alt="" />CIBD Mango Town, Bharakahu <br />Post Office Bharakahu, Islamabad</li>
            </ul>
        </div>

        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />

                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number" required />

                <label>Your Message</label>
                <textarea name="message" rows="5" placeholder="Write your message..." required></textarea>

                <button type="submit" className="dark-btn">Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
</section>

    )
}

export default Contact