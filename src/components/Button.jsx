import React from "react";

const Button = ({ styles, text }) => (
<a href="#contact">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] rounded-[10px] outline-none ${styles}`}>
    {text}
  </button>
</a>
);

export default Button;
