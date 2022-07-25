import styled from "styled-components";

const SkillStyled = styled.div`
  margin: 50px 100px;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.light
      ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"};

  .flex-center {
    justify-content: center;
  }
  .flex-align-center {
    align-items: center;
  }
  .flex-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    img {
      width: 100%;
    }
    .left,
    .right {
      width: 50%;
      flex-direction: column;
    }

    .left {
      order: ${(props) => (props.order === "first" ? "1" : "2")};
      .text-align-left {
        padding: 30px 75px;
        .title {
          font-size: 1.5rem;
          font-weight: bolder;
        }

        .languages {
          font-size: 0.9rem;
          color: #b23cfd;
        }

        .buttonAccess {
          margin: 10px 0;
          padding: 5px 10px;
          width: fit-content;
          border-radius: 5px;
          background-color: ${(props) => (props.light ? "#B23CFD" : "#B23CFD")};
          transition: ease-in-out all 0.25s;
          :hover {
            background-color: ${(props) =>
              props.light ? "#a32eeb" : "#a32eeb"};
          }

          a {
            text-decoration: none;
            color: white;
          }
        }
      }
    }
    .right {
      order: ${(props) => (props.order === "second" ? "1" : "2")};
      border-top-right-radius: ${(
        props // Si c'est en deuxième position
      ) => (props.order === "second" ? "0px" : "8px")};
      border-bottom-right-radius: ${(
        props // Si c'est en deuxième position
      ) => (props.order === "second" ? "0px" : "8px")};

      border-top-left-radius: ${(
        props // Si c'est en première position
      ) => (props.order === "second" ? "8px" : "0px")};
      border-bottom-left-radius: ${(
        props // Si c'est en première position
      ) => (props.order === "second" ? "8px" : "0px")};
      background-color: ${(props) => (props.light ? "#B23CFD" : "#B23CFD")};
    }
  }

  @media only screen and (max-width: 1024px) {
    margin: 30px 20px;
  }

  @media only screen and (max-width: 600px) {
    .flex-row {
      .left,
      .right {
        width: 100%;
      }
    }
  }
`;

export default SkillStyled;
