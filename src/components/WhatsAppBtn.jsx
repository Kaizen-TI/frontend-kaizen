import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn() {
  const handleWhatsAppClick = () => {
    // Lógica para abrir o WhatsApp com a mensagem pré-preenchida
    const whatsappURL = "https://wa.me/244948880797";
    window.open(whatsappURL);
  };
  return (
    <div className="relative flex">
      <button
        className=" z-9 fixed right-20 bottom-20"
        onClick={handleWhatsAppClick}
        target="_blank"
      >
        <span className="relative flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
        <FaWhatsapp className="bg-fixed  transition duration-300 ease-in-out hover:opacity-70 fill-green-500 w-20 h-20" />
      </button>
    </div>
  );
}
