import MailerStyled from "./Mailer.styled";
import { DarkModContext } from "context/DarkModContext";
import { useContext, useState } from "react";
import { send } from "emailjs-com";
import { toast } from "react-toastify";

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
      <div className="mailer-container">
        <div className="form-control">
          <label>Nom</label>
          <input
            type="text"
            name="nom"
            id="nom"
            placeholder="Votre nom"
            value={toSend.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Votre email"
            value={toSend.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-control">
          <label>Numéro de téléphone</label>
          <input
            type="tel"
            name="tel"
            id="tel"
            placeholder="Votre numéro de téléphone"
            value={toSend.tel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-control">
          <label>Sujet</label>
          <select name="sujet" id="sujet" onChange={handleChange}>
            <option className="opt-class" value="" disabled selected>
              Sélectionnez votre option
            </option>
            <option className="optionHover" value="Discussion">
              Discussion
            </option>
            <option className="optionHover" value="Information">
              Information
            </option>
            <option className="optionHover" value="Proposition">
              Proposition
            </option>
            <hr />
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className="form-control">
          <label>Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Votre message"
            value={toSend.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" onClick={(e) => onSubmitMail(e)}>
          Envoyer
        </button>
      </div>
    </MailerStyled>
  );
};

export default Mailer;
