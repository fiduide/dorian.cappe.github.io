import styled from "styled-components";

const BurgerStyled = styled.header`
  position: fixed;
  z-index: 999;
  top: 30px;
  right: 30px;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export default BurgerStyled;
