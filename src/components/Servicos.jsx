import React from "react";
import styles from "../style";
import { slidedatascience, slidedesenvolvimento, slidedgrafico, slideduiux, slidehospedagem, slidetrafegopago } from "../assets";

export default function Services() {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section className="text-gray-400 bg-red-950 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-gray-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-indigo-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                  Outros Serviços
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Oferecendo soluções completas e personalizadas para atender todas 
                as suas necessidades de marketing, design e tecnologia.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slidedgrafico}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Design Gráfico
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Transforme sua visão em realidade com designs profissionais e criativos com:
                Criação de Identidade Visual, Design de Materiais Promocionais,
                Design para Redes Sociais, Ilustrações Personalizadas...
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saber mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slideduiux}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                Design de UI/UX
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Crie experiências de usuário envolventes e intuitivas com designs de UI/UX de alta qualidade.
                Benefícios: Pesquisa de Usuário, Wireframes e Protótipos, Design de Interface, Testes de Usabilidade...
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saiba mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slidetrafegopago}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                  Tráfego Pago (Google Ads, Facebook Ads, etc.)
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Atraia clientes qualificados e aumente suas vendas com campanhas de tráfego pago otimizadas.
                Benefícios: Planejamento de Campanhas, Criação de Anúncios...
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saiba mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slidedesenvolvimento}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                Desenvolvimento de Site, Blog e Landing Page
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Desenvolva sua presença online com sites, blogs e landing pages otimizados e de alta performance;
                Desenvolvimento Personalizado, SEO Integrado, Design Responsivo...
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saiba mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slidehospedagem}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                Venda de Hospedagem, Domínio e E-mail Corporativo
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Garanta a estabilidade e a profissionalidade do seu 
                negócio online com serviços de hospedagem, domínio e e-mail corporativo...
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saiba mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={slidedatascience}
                  />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">
                Ciência de Dados
                </h2>
                <p className="text-base leading-relaxed mt-2">
                Transforme dados brutos em insights valiosos para impulsionar decisões estratégicas e otimizar operações.
                Benefícios: Análise de Dados, Modelagem Preditiva, Visualização de Dados, Automação de Processos
                </p>
                <a className="text-indigo-400 inline-flex items-center mt-3">
                  Saiba mais
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
