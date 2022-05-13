import BurgerStyled from "./Burger.styled";
import menuBurger from "../../../assets/images/menu.png";
import { useState } from "react";
const Burger = ({ handleClickHeader }) => {
  return (
    <BurgerStyled onClick={() => handleClickHeader()}>
      <img src={menuBurger} alt="Menu" />
    </BurgerStyled>
  );
};

export default Burger;
