// Send_Mail.jsx
import React from "react";
import { Resend } from "resend";
import Email from "./Email"; // Removed curly braces from import
import PropTypes from "prop-types";

function Send_Mail({ email, code }) {
  const sendEmail = () => {
    const resend = new Resend("re_h3H9iNNm_LC4ioGTUVsV85Q6Gzcdwf2XZ");
    resend.emails
      .send({
        from: "servoverve@resend.dev",
        to: email,
        subject: "Verification Code",
        react: <Email code={code} />,
      })
      .then(() => {
        // Email sent successfully
        console.log("Email sent successfully");
      })
      .catch((error) => {
        // Error occurred while sending email
        console.error("Error sending email:", error);
      });
  };

  return <div>{sendEmail()}</div>;
}
Send_Mail.propTypes = {
  email: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};

export default Send_Mail;
