import styled from "styled-components";

const HomeStyled = styled.div`
  overflow: hidden;

  .first-content {
    position: relative;
    overflow: hidden;
    min-height: 100vh !important;

    .center {
      text-align: center;
    }

    .middle {
      margin-top: 60px;
    }

    .bottom {
      img {
        filter: brightness(${(props) => (props.light ? "100%" : "90%")});
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .title {
      margin-top: 100px;
      h1 {
        font-size: 46px;
        font-weight: 800;

        h2 {
          font-size: 40px;
          color: gray;
        }
      }
    }
  }

  .second-content {
    background-color: ${(props) => (props.light ? "#B23CFD" : "#B23CFD")};

    .content {
      color: white;
      text-align: center;
      padding: 50px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      h2 {
        font-weight: 800;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .middle {
      margin: 275px 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .middle {
      margin: 275px 0;
    }
    .bottom {
      img {
        position: initial;
        max-width: 100%;
      }
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      line-height: 50px;
    }
    h2 {
      margin: 0 20px;
    }
    .middle {
      margin: 166px 0;
    }

    .second-content {
      .content {
        padding: 100px 20px;
      }
    }
  }
`;

export default HomeStyled;
