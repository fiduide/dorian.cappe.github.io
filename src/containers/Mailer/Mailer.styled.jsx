import styled from "styled-components";

const MaileStyled = styled.form`
  color: ${(props) => (props.light ? "#1c1c1e" : "#fefefe")};
  overflow: hidden;
  min-height: 100vh !important;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 300px;

  .mailer-container {
    width: 100%;
    flex-direction: column;

    .form-control {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      label {
        margin-bottom: 8px;
      }
      input,
      textarea,
      select,
      option {
        height: 45px;
        border: none;
        border-radius: 5px;
        padding-left: 5px;
        background-color: ${(props) => (props.light ? "#e8e8ed" : "#e7e7e7")};
      }

      textarea {
        min-height: 200px;
        resize: none;
      }
    }
    button {
      width: 100%;
      font-size: 18px;
      font-weight: 700;
      padding: 10px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      transition: ease-in-out all 0.25s;
      color: ${(props) => (props.light ? "#fefefe" : "#fefefe")};
      background-color: ${(props) => (props.light ? "#B23CFD" : "#B23CFD")};

      :hover {
        background-color: ${(props) => (props.light ? "#a22cec" : "#a22cec")};
        color: ${(props) => (props.light ? "#fefefe" : "#fefefe")};
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 20px 100px;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px 20px;
  }
`;

export default MaileStyled;
