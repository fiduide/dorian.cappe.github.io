import styled from "styled-components";

const SkillsStyled = styled.div`
  padding: 15px;
  min-height: 100.7vh;
  color: ${(props) => (props.light ? "#1c1c1e" : "#fefefe")};

  h1 {
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    border-right: solid 3px gray;
  }

  .containerProgress {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;

    .colOne {
      padding: 0px 50px;
      margin: 0px 20px;
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 600px) {
    .containerProgress {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      flex-wrap: wrap;

      .colOne {
        padding: 0 20px;
        margin: 0 20px;
        border-radius: 5px;
      }
    }
    h2 {
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 375px) {
    .containerProgress {
      .colOne {
        padding: 15px;
        margin: 15px 10px;
      }
    }
  }
`;

export default SkillsStyled;
