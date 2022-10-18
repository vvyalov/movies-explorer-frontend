import React from "react";

function BurgerButton({ onButtonClick }) {
  return(
    <button
      className="burger-button"
      title="Открыть меню"
      type="button"
      onClick={ onButtonClick }/>
  )
}

export default BurgerButton;