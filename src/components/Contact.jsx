import React, { useState } from "react";
import styles from "../style";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const WhatsAppFoneNumber ="+244948880797"
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    initiateWhatsAppSMS()

  };

  const initiateWhatsAppSMS = () => {
    let url =
      'https://wa.me/' + WhatsAppFoneNumber + "?text="
      + "'Nome :' " +name+"%0a" 
      + "'E-mail : ' " +email+"%0a" 
      + "'Mensagem: ' " +message+"%0a" + '&phone=' + WhatsAppFoneNumber;
      window.open(url, '_blank').focus();
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="contact" className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
          <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63076.15707120082!2d13.164602758189659!3d-8.855386146875734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-8.8146556!2d13.230175599999999!4m5!1s0x1a51f57314e77bff%3A0x3657b16f191f770d!2sKaizen%20TI!3m2!1d-8.8951701!2d13.188647399999999!5e0!3m2!1spt-PT!2sao!4v1718661732835!5m2!1spt-PT!2sao" width="100%" height="100%" style={{border:0 + 'px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="font-semibold  text-2xl  mb-1 text-slate-950 title-font">
                Solicite seu orçamento.
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Faça a solicitação do serviço, e alguém da nossa equipa vai
                atender o seu pedido.
              </p>
              <div className="relative mb-4">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Nome
                </label>
                <input
                  required
                  value={name}
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleNameChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  required
                  value={email}
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleEmailChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mensagem
                </label>
                <textarea
                  required
                  value={message}
                  id="message"
                  name="message"
                  onChange={handleMessageChange}
                  className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Enviar
              </button>
            </div>
            {/* Botão para direcionar no WhatsApp */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
