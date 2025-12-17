import React from "react";
import whatsappIcon from "../assets/whatsapp.png"; // Make sure you have a whatsapp.png in assets folder
import "../styles/whatsapp.css";

export default function WhatsAppButton() {
  const phoneNumber = "923193375484";
  const message = "Hello, I'm Umair";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}
