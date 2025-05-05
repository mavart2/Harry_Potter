import React from "react";

const Button = ({ text = "Click me", onClick, iconClass = "fa fa-home" }) => {
    return (
        <>
          <button onClick={onClick} className="btn-search ">
            {text} <i className={iconClass}></i>
          </button>
        </>
      );
}

export default Button;