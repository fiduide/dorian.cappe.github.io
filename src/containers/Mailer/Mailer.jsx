import MailerStyled from "./Mailer.styled";
import { DarkModContext } from "context/DarkModContext";
import { useContext, useState } from "react";
import { send } from "emailjs-com";
import { toast } from "react-toastify";

import link from "../../assets/images/link.png";

const Mailer = () => {
  const { isDarkMode } = useContext(DarkModContext);
  const [toSend, setToSend] = useState({
    nom: "",
    message: "",
    email: "",
    sujet: "",
    tel: "",
  });

  const handleChange = (e) => {
    if (e.target.name != "sujet")
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    else {
      let select = document.getElementById("sujet");
      let sujetValue = select.options[select.selectedIndex].text;
      setToSend({ ...toSend, [e.target.name]: sujetValue });
    }
  };
  const onSubmitMail = async (e) => {
    e.preventDefault();

    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let select = document.getElementById("sujet");
    let sujet = select.options[select.selectedIndex].text;
    let message = document.getElementById("message").value;

    if (
      nom === "" ||
      email === "" ||
      message === "" ||
      sujet === "Sélectionnez votre option" ||
      tel === ""
    ) {
      toast.error("Veuillez remplir tous les champs");
    } else {
      console.log(sujet);
      const response = await toast.promise(
        send(
          "service_xfaknro",
          "template_w23s3bs",
          toSend,
          "user_5HwBHvbjJjkoULL3vS7jx"
        ),
        {
          pending: "Le mail est en cours d'envoie...",
          success: "Mail envoyé 👌",
          error: "Problème avec l'envoie de mail 🤯",
        }
      );
      setToSend({
        nom: "",
        message: "",
        email: "",
        sujet: "",
        tel: "",
      });
    }
  };

  return (
    <MailerStyled
      onSubmit={(e) => onSubmitMail(e)}
      light={!isDarkMode ? true : false}
    >
      <h1>Vous souhaitez me contacter ?</h1>
      <a href="https://www.linkedin.com/in/dorian-cappe/">
        <img src={link} alt="linkedin" target="_blank" />
      </a>
    </MailerStyled>
  );
};

export default Mailer;
