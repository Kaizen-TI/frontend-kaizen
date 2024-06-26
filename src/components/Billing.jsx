import React from "react";

import { Carousel, IconButton } from "@material-tailwind/react";

import {
  slidedgrafico,
  slideduiux,
  slideredesocial,
  slidetrafegopago,
  slidedesenvolvimento,
  slidehospedagem,
} from "../assets";
import styles from "../style";
 
export function Billing() {
  return (
    <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-black/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="red"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <img
        src={slidedgrafico}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src={slideduiux}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src={slideredesocial}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src={slidetrafegopago}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src={slidedesenvolvimento}
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <img
        src={slidehospedagem}
        alt="image 1"
        className="h-full w-full object-cover"
      />
     
    </Carousel>
    </div>
    </div>
  );
}

// export function Billing() {
//   return (
//     <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//       <div className={`${styles.boxWidth}`}>
//         <div
//           id="default-carousel"
//           className="relative pt-12 h-full w-full"
//           data-carousel="slide"
//         >
//           <div className="relative h-full  overflow-hidden rounded-lg md:h-96">
//             <div
//               className="hidden duration-700 h-full w-ful ease-in-out"
//               data-carousel-item
//             >
//               <img
//                 src={slidedgrafico}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-2/2 top-2/2 left-1/2"
//                 alt="..."
//               />
//             </div>

//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={slideduiux}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>

//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={slideredesocial}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>

//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={slidetrafegopago}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>

//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={slidedesenvolvimento}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>

//             <div className="hidden duration-700 ease-in-out" data-carousel-item>
//               <img
//                 src={slidehospedagem}
//                 className="absolute block h-full w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                 alt="..."
//               />
//             </div>
//           </div>

//           <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="true"
//               aria-label="Slide 1"
//               data-carousel-slide-to="0"
//             ></button>
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 2"
//               data-carousel-slide-to="1"
//             ></button>
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 3"
//               data-carousel-slide-to="2"
//             ></button>
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 4"
//               data-carousel-slide-to="3"
//             ></button>
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 5"
//               data-carousel-slide-to="4"
//             ></button>
//             <button
//               type="button"
//               className="w-3 h-3 rounded-full"
//               aria-current="false"
//               aria-label="Slide 6"
//               data-carousel-slide-to="5"
//             ></button>
//           </div>

//           <button
//             type="button"
//             className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-prev
//           >
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg
//                 className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//               <span className="sr-only">Previous</span>
//             </span>
//           </button>
//           <button
//             type="button"
//             className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
//             data-carousel-next
//           >
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg
//                 className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//               <span className="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Billing;
