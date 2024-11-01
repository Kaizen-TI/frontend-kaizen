import React from "react";
import WorkWithUs from "./WorkWithUs";
import styles from "../style";
import Team from "./Team";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const About = () => {
  const data = [
    {
      label: "Missão",
      value: "dashboard",
      icon: Square3Stack3DIcon,
      desc: `Prestar assessoria em 
        comunicação para 
        empresas que tenham 
        potencial de modificar 
        positivamente a 
        sociedade, seja por 
        meio de um produto 
        ou serviço.`,
    },
    {
      label: "Visão",
      value: "profile",
      icon: UserCircleIcon,
      desc: `Ser uma agência com 
          espírito de 
          transformação, 
          reconhecida pela 
          originalidade, ética e 
          eficiência, que 
          apresenta soluções 
          conscientes e 
          sustentáveis.`,
    },
    {
      label: "Valor",
      value: "valore",
      icon: Cog6ToothIcon,
      desc: `Ética, Humildade, 
          Transformação,
          Sensibilidade, Paixão, 
          Diversidade, Respeito.`,
    },
    {
      label: "Propósito",
      value: "settings",
      icon: Cog6ToothIcon,
      desc: `Transmutar a 
          comunicação de 
          serviços e produtos a 
          fim de construir um 
          mundo melhor.
          `,
    },
  ];

  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className={`${styles.paddingY} `}>
        <WorkWithUs />
      </div>
      <div className={`${styles.paddingY} `}>
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="w-full lg:w-8/12 flex flex-col justify-center">
            {/* <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Sobre Nós
            </h1> */}
            <p className={`font-normal text-base leading-6  text-dimWhite ${styles.paragraph}`}>
            Somos a Kaizen TI, uma empresa angolana especializada em Tecnologia da Informação, Comunicação e Design. 
            Desde 2023, estamos presentes no mercado de Luanda, oferecendo soluções tecnológicas inovadoras e 
            serviços de comunicação visual que atendem às necessidades específicas de nossos clientes. 
            Nossa estrutura local nos permite prestar serviços de forma ágil e acessível, garantindo a 
            satisfação e o sucesso dos negócios que atendemos.
            </p>

            <p className={`font-normal text-base leading-6 text-dimWhite ${styles.paragraph} `}>
            Nossa equipe possui um vasto conhecimento em projetos de missão crítica e alta disponibilidade, 
            assegurando que seu projecto seja atendido e entregue no prazo. Com uma lista de parcerias e 
            representações de alto nível, trazemos as melhores tecnologias e inovação para o seu projecto.
            </p>

            <p className={`font-normal text-base leading-6 text-dimWhite ${styles.paragraph} ${styles.paddingY}} `}>
            Na Kaizen TI, oferecemos uma gama completa de serviços, incluindo gestão e monitoramento de 
            redes sociais, design gráfico, tráfego pago (Google Ads, Facebook Ads, etc.), design de UI/UX, 
            desenvolvimento de sites, blogs e landing pages, venda de hospedagem de domínios e e-mails 
            corporativos, além de soluções em ciência de dados. Nosso objetivo é ajudar sua empresa a se 
            destacar no mercado, proporcionando resultados reais e duradouros.
            </p>
          </div>
        </div>
        {/* <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                </div>  */}
      </div>

      <div className={`${styles.paddingY} `}>
        <Tabs value="dashboard">
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  {/* {React.createElement(icon, { className: "w-5 h-5" })} */}
                  <p>
                    {label}
                  </p>
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <p className={`font-normal text-base text-center leading-6 text-dimWhite ${styles.paragraph} ${styles.paddingY}}`}>
                {desc}
                </p>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
{/* 
      <div className="flex flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Nossa História
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Alexa
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Olivia
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Liam
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden"
                src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <img
                className="md:hidden block"
                src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                alt="Elijah featured img"
              />
              <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                Elijah
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className={`${styles.paddingY} `}>
        <Team />
      </div>
    </div>
  );
};

export default About;
