import styled from "styled-components";

const SkillStyled = styled.div`
  padding: 15px 30px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  border-radius: 8px;
  border-bottom: 1px solid #b23cfd;
  box-shadow: ${(props) =>
    props.light
      ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      : "rgba(57, 57, 62, 0.2) 0px 7px 29px 0px;"};

  font-weight: bold;

  .logo {
    margin-right: 15px;
    max-width: 50px;
  }

  @media only screen and (max-width: 500px) {
    .logo {
      margin-right: 10px;
    }
  }

  @media only screen and (max-width: 320px) {
    padding: 15px 23px;
  }
`;

export default SkillStyled;
