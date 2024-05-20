
import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import styles from "../style";

// const SliderCard = ({ title, imagem, content, index }) => (
//   <TECarousel
//     id="portfolio"
//     showControls
//     showIndicators
//     crossfade
//     ride="carousel"
//     prevBtnIcon={
//       <>
//         <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15.75 19.5L8.25 12l7.5-7.5"
//             />
//           </svg>
//         </span>
//         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//           Previous
//         </span>
//       </>
//     }
//     nextBtnIcon={
//       <>
//         <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M8.25 4.5l7.5 7.5-7.5 7.5"
//             />
//           </svg>
//         </span>
//         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//           Next
//         </span>
//       </>
//     }
//     theme={{
//       indicator:
//         "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
//     }}
//   >
//     <div
//       className={`relative w-full ${
//         index !== sliderServices.length - 1 ? "w-full" : "w-0"
//       } overflow-hidden after:clear-both after:block after:content-[''] `}
//     >
//       <TECarouselItem
//         itemID={index}
//         className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
//       >
//         <img src={imagem} className="block w-full" alt="..." />
//         <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
//           <h5 className="text-xl">{title}</h5>
//           <p>{content}</p>
//         </div>
//       </TECarouselItem>
//     </div>
//   </TECarousel>
// );

function Billing() {
  return (
    <>
      {/* <div className={`bg-ligthWhite ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {sliderServices.map((slide, index) => (
            <SliderCard key={slide.id} {...slide} index={index} />
          ))}
        </div>
      </div> */}
      
      <div className={`bg-ligthWhite ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <TECarousel
          id="portfolio"
          showControls
          showIndicators
          crossfade
          ride="carousel"
          prevBtnIcon={
            <>
              <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Previous
              </span>
            </>
          }
          nextBtnIcon={
            <>
              <span className="inline-block text-black h-8 w-8 [&>svg]:h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Next
              </span>
            </>
          }
          theme={{
            indicator:
              "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
          }}
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <TECarouselItem
              itemID={1}
              className="relative float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                className="block w-full"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={2}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
                className="block w-full"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </TECarouselItem>
            <TECarouselItem
              itemID={3}
              className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
                className="block w-full"
                alt="..."
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </TECarouselItem>
          </div>
        </TECarousel>
      </div>
      </div >
    </>
  );
}

export default Billing;
