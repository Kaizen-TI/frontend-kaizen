import React from "react";

const Button = ({ styles, text, link }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary  rounded-[10px] outline-none ${styles}`}>
    {text}
  </button>
);

export default Button;
