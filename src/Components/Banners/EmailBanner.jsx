import React, { useState } from "react";
import "./EmailBanner.css";
import SendIcon from "@mui/icons-material/Send";

const EmailBanner = () => {
  const [emailSuccess, setemailSuccess] = useState(false);
  const [emailValue, setemailValue] = useState("");
  const [msg, setmsg] = useState("");

  // function for email validation
  const succesEmail = () => {
    if (emailValue.length < 7) {
      setmsg("Please enter your email address in a valid form");
      if (emailValue.length <= 0) {
        setmsg("Please fill out this field");
      }
    } else {
      setemailSuccess(true);
      setemailValue("");
      setmsg("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    succesEmail();
    console.log({
      email: data.get("newletterEmail"),
    });
  };
  return (
    <div className="EmailBanner">
      <h4 style={{ textTransform: "capitalize" }}>Enter email for upcoming course registration and special events.</h4>
      <form className={emailSuccess ? "email-bar hide" : "email-bar active-display"} onSubmit={handleSubmit}>
        <input required autoComplete="true" type="email" placeholder="enter your email" className="email" id="newsletterEmail" name="newletterEmail" value={emailValue} onChange={(e) => setemailValue(e.target.value)} />
        <button type="sumbit" className="sendEmail">
          <SendIcon />
        </button>
        <span className={`msg ${msg.length > 0 ? "active-display" : "hide"}`}>{msg}</span>
      </form>
      <span className={emailSuccess ? "success-email active-display" : "success-email hide"}>Thank you! You are Now Subscribed to Codeango Newsletters.</span>
    </div>
  );
};

export default EmailBanner;
