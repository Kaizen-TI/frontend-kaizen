import React from "react";

export default function FAQ() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">Perguntas frequentes</p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> O que é marketing digital?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Marketing digital é a promoção de produtos ou serviços através de canais digitais, como redes 
              sociais, motores de busca, e-mails e websites. Ele envolve diversas estratégias para alcançar 
              e engajar o público-alvo online.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Como o marketing digital pode beneficiar o meu negócio?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              O marketing digital pode aumentar a visibilidade da sua marca, 
              atrair novos clientes, melhorar a comunicação com o público, 
              aumentar as vendas e proporcionar um melhor retorno sobre o 
              investimento (ROI) em comparação com métodos tradicionais de marketing.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Quais são as principais estratégias de marketing digital?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              As principais estratégias incluem SEO (otimização para motores de busca), 
              marketing de conteúdo, marketing em redes sociais, PPC (pagamento por clique), 
              e-mail marketing, marketing de influência e análise de dados.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> O que é SEO e por que é importante?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              SEO, ou otimização para motores de busca, é o processo de melhorar 
              a visibilidade do seu website nos resultados de busca orgânica. 
              É importante porque aumenta o tráfego qualificado para o seu site, 
              melhora a credibilidade da marca e pode resultar em mais conversões e vendas.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Como as redes sociais podem ajudar meu negócio?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              As redes sociais são uma plataforma poderosa para aumentar a 
              visibilidade da marca, engajar com o público, promover produtos e 
              serviços, obter feedback dos clientes e construir uma comunidade fiel ao redor da sua marca.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> O que é PPC e como funciona?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              PPC, ou pagamento por clique, é um modelo de publicidade onde 
              você paga uma taxa cada vez que seu anúncio é clicado. 
              É uma maneira eficaz de direcionar tráfego para seu site, 
              especialmente para palavras-chave competitivas ou quando você deseja resultados rápidos.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Qual a diferença entre marketing de conteúdo e marketing tradicional?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              O marketing de conteúdo foca em criar e distribuir conteúdo valioso
               e relevante para atrair e engajar um público-alvo específico, 
               ao invés de promover diretamente um produto ou serviço. Já o 
               marketing tradicional usa técnicas como anúncios de TV, rádio e
                impressos para promover produtos ou serviços diretamente.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> O que é um funil de vendas??</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Um funil de vendas é uma representação visual do processo 
              pelo qual os prospects passam desde o primeiro contato com 
              sua empresa até a conversão em clientes. As etapas geralmente 
              incluem conscientização, interesse, decisão e ação.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Como posso medir o sucesso das minhas campanhas de marketing digital?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              O sucesso das campanhas de marketing digital pode ser 
              medido através de métricas como tráfego do site, taxas de 
              conversão, ROI, engajamento em redes sociais, taxa de abertura e 
              cliques em e-mails, e posicionamento em resultados de busca.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Por que é importante ter um design de UI/UX eficaz?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Um design de UI/UX eficaz melhora a experiência do usuário ao tornar 
              as interfaces intuitivas, atrativas e fáceis de usar. Isso aumenta a 
              satisfação do cliente, reduz a taxa de abandono e pode levar a maiores taxas de conversão.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Como posso começar a trabalhar com a Kaizen TI?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Para começar a trabalhar conosco, basta entrar em contato 
              através do nosso site, e-mail ou telefone. Nossa equipe terá 
              prazer em discutir suas necessidades e como podemos ajudar a 
              alcançar seus objetivos de marketing e design.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> A Kaizen TI oferece serviços de design para mobile e web?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
              Sim, a Kaizen TI oferece serviços especializados em design de UI/UX 
              para soluções web e mobile. Nosso objetivo é criar interfaces que 
              proporcionem uma experiência de usuário superior e ajudem a alcançar 
              os objetivos de negócio dos nossos clientes.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}