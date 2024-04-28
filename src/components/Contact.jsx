import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    // Lógica para enviar o formulário (pode ser uma chamada para uma API, etc.)
    console.log("Enviando formulário...");
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);
    // Você pode adicionar aqui a lógica para enviar os dados do formulário para o backend
  };

  return (
    <section id="contact" className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300">
      <iframe width="100%" height="100%" title="map" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="font-semibold  text-2xl  mb-1 text-slate-950 title-font">
          Solicite seu orçamento.
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Faça a solicitação do serviço, e alguém da nossa equipa vai atender o seu pedido.
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
            <label for="message" className="leading-7 text-sm text-gray-600">
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
          <button onClick={handleSubmit} className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Enviar
          </button>
        </div>
        {/* Botão para direcionar no WhatsApp */}
      </div>
    </section>
  );
};

export default Contact;
