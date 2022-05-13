import styled from "styled-components";

const SkillsStyled = styled.div`
  padding: 15px;
  min-height: 100.7vh;

  .containerProgress {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  h1 {
    white-space: nowrap;
    overflow: hidden;
    font-size: 28px;
    border-right: solid 3px gray;
    animation: animated-text 4s 1s 1 normal both, animated-cursor 600ms infinite;

    /* text animation */

    @keyframes animated-text {
      from {
        width: 0;
      }
      to {
        width: 270px;
      }
    }

    /* cursor animations */

    @keyframes animated-cursor {
      from {
        border-right-color: gray;
      }
      to {
        border-right-color: transparent;
      }
    }
  }

  .progress {
    width: 100px;
    margin: 10px 150px;
    z-index: 0;

    h3 {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        position: absolute;
        width: 100%;
        top: 15px;
        left: -70px;
        z-index: 0;
      }
    }
  }

  .CircularProgressbar-path {
    stroke: ${(props) => (!props.light ? "#696969" : "#326ada")};
  }
  .CircularProgressbar-trail {
    stroke: ${(props) => (!props.light ? "A9A9A9" : "#c8c8c8")};
  }
  .CircularProgressbar-text {
    fill: ${(props) => (!props.light ? "#fefefe" : "#696969 ")};
    font-weight: 600;
  }

  @media only screen and (max-width: 600px) {
    .progress {
      width: 100px;
      margin: 10px 50px;
      h3 {
        img {
          position: absolute;
          width: 90%;
          top: 30px;
          left: -60px;
        }
      }
    }
  }

  @media only screen and (max-width: 375px) {
    .progress {
      width: 100px;
      margin: 5px 30px;
      h3 {
        img {
          position: absolute;
          width: 80%;
          top: 30px;
          left: -40px;
        }
      }
    }
  }
`;

export default SkillsStyled;
