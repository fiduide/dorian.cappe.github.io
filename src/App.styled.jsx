import styled from "styled-components";

const AppStyled = styled.div`
  margin-left: 100px;
  background-color: ${(props) => (props.light ? "#f2f2f2" : "#1c1c1e")};
  color: ${(props) => (props.light ? "#1c1c1e" : "#fefefe")};

  img {
    filter: ${(props) => (props.light ? "grayscale(0%)" : "grayscale(20%)")};
  }

  @media only screen and (max-width: 600px) {
    margin-left: 0;
  }
`;

export default AppStyled;
