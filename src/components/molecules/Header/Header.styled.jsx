import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (!props.isOpen ? "500px" : "100px")};
  height: ${(props) => (!props.isOpen ? "97.7vh" : "100vh")};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
  align-items: center;
  padding: ${(props) => (!props.isOpen ? "15px" : "0")};
  transition: ease-in-out all 0.25s;
  background-color: ${(props) => (props.light ? "#e8e8ed" : "#292929")};
  z-index: 998;

  .top {
    img {
      margin-right: ${(props) => (!props.isOpen ? "15px" : "0px")};
    }

    .arrowNext {
      transition: ease-in-out all 0.25s;
      padding-right: 15px;
      transform: ${(props) =>
        !props.isOpen ? "rotate(180deg)" : "rotate(0deg)"};
    }
    .firstButton {
      margin-bottom: 150px;
    }
    .d-flex {
      display: flex;
    }

    .align-items-center {
      align-items: center;
    }

    .space-between {
      justify-content: space-between;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: left;
      background: none;
      font-size: ${(props) => (!props.isOpen ? "24px" : "0px")};
      border: none;
      padding: 15px;
      border-radius: 8px;
      color: ${(props) => (!props.light ? "#eee" : "#333")};
      transition: ease-in-out all 0.25s;

      :first-child {
        justify-content: center;
      }
      :not(:first-child) {
        background-color: ${(props) => (props.light ? "#fafafa" : "gray")};
        color: ${(props) => (!props.light ? "#eee" : "gray")};
        min-width: ${(props) => (!props.isOpen ? "300px" : "auto")};
        padding-left: ${(props) => (!props.isOpen ? "30px" : "15px")};
        margin: 20px;

        :hover {
          background-color: ${(props) => (props.light ? "#0d6efd" : "#b9b9b9")};
          color: white;
        }
      }
    }
  }

  .bottom {
    h3 {
      display: ${(props) => (!props.isOpen ? "inline" : "none")};
      font-weight: 400;
      color: ${(props) => (!props.light ? "papayawhip" : "gray")};
    }
    .row {
      display: flex;
      flex-direction: ${(props) => (!props.isOpen ? "row" : "")};
      align-items: center;

      p {
        display: ${(props) => (!props.isOpen ? "inline" : "none")};
        color: ${(props) => (!props.light ? "#eee" : "#333")};
      }
    }
  }

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-right: 10px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
      :checked + .slider {
        background-color: ${(props) => (props.light ? "#2196f3" : "gray")};
      }
      :focus + .slider {
        box-shadow: 0 0 1px #2196f3;
      }
      :checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
      }
    }
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: ${(props) => (!props.isOpen ? "0" : "-15px")};
    left: 0;
    right: 0;
    bottom: ${(props) => (!props.isOpen ? "0" : "15px")};
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    :before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  @media only screen and (max-width: 600px) {
    width: ${(props) => (!props.isOpen ? "-webkit-fill-available" : "0px")};
    display: ${(props) => (!props.isOpen ? "block" : "none")};
    height: 96.5vh;
    .arrowNext {
      display: none;
    }

    .firstButton {
      margin-bottom: 100px !important;
    }

    .top {
      max-width: 94%;
      button {
        min-width: 250px !important;
        font-size: 18px;

        :not(:first-child) {
          margin: 20px auto;
        }

        :first-child {
          justify-content: left;
        }
      }
    }

    .bottom {
      max-width: 94%;
      text-align: center;
      h3 {
        font-size: 18px;
      }
      .row {
        display: flex;
        justify-content: center;
        font-size: 14px;
        /* The slider */
        .slider {
          :before {
            height: 16px;
            width: 16px;
          }
        }

        /* The switch - the box around the slider */
        .switch {
          width: 40px;
          height: 24px;
          input {
            :checked + .slider:before {
              -webkit-transform: translateX(14px);
              -ms-transform: translateX(14px);
              transform: translateX(14px);
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 400px) {
    a {
      font-size: 10px;
    }
  }
`;

export default HeaderStyled;
